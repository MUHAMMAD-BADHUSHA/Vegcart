const userModel = require('../Models/UserModel')
const bcrypt =require('bcryptjs')

const signUp = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' }); 
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({name, email, password:hashedPassword})
        await newUser.save()
        res.status(200).json({ success: true, message: 'user registered' })
    } catch (error) {
        res.status(500).json({ message: 'server error', error })
    }
}
const signIn = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (email === 'admin123@gmail.com' && password === 'admin') {
        const admin = await userModel.findOne({ email });
  
        if (!admin) {
          return res.status(404).json({ success: false, message: 'Admin user not found in database' });
        }
  
        const adminPayload = { user: { id: admin.id } };
        const admintoken = jwt.sign(adminPayload, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
        return res.status(200).json({ success: true, message: 'Admin login successful', admin: true, token: admintoken });
      } else {
        const user = await userModel.findOne({ email });
  
        // 🔴 Add this check
        if (!user) {
          return res.status(404).json({ success: false, message: 'User not found' });
        }
  
        const isMatch = await bcrypt.compare(password, user.password);
  
        if (!isMatch) {
          return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }
  
        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
  
        return res.status(200).json({ success: true, message: 'User signed in', data: user, token });
      }
    } catch (error) {
      console.error(error); // 👈 Add this to see error in console
      res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
  };
  


module.exports = { signUp,signIn }