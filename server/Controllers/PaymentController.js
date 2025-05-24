const Razorpay = require('razorpay');
const crypto = require('crypto');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create Razorpay Order
const createOrder = async (req, res) => {
  const { amount } = req.body;

  try {
    const options = {
      amount: amount , // Razorpay expects amount in paise
      currency: 'INR',
      receipt: `receipt_order_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Order creation failed', error: error.message });
  }
};

// Verify Razorpay Signature
const verifyPayment = (req, res) => {
  const { order_id, payment_id, signature } = req.body;

  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${order_id}|${payment_id}`)
    .digest('hex');

  if (expectedSignature === signature) {
    res.status(200).json({success:true, message: 'Payment verified successfully' });
  } else {
    res.status(400).json({success:false, message: 'Payment verification failed' });
  }
};

module.exports = {
  createOrder,
  verifyPayment,
};
