const CartModel = require('../Models/CartModel');
const ItemsModel = require('../Models/ItemsModel')


const getVegetables = async(req,res)=>{
    try {
        const vegetables = await ItemsModel.find({category:'vegetables'})

        if (!vegetables) {
            return res.status(404).json({ success: false, message: 'vegetables not found' });
        }

        res.status(200).json({success:true,data:vegetables})
    } catch (error) {
        console.log('server error',error)
        res.status(500).json({message:'server error',error})
    }
}
const getFruit = async (req, res) => {
    try {
        const fruits = await ItemsModel.find({ category: 'fruits' });

        if (!fruits) {
            return res.status(404).json({ success: false, message: 'Fruits not found' });
        }

        res.status(200).json({ success: true, data: fruits });

    } catch (error) {
        console.log('server error', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const addToCart = async (req, res) => {
    try {
      const { id } = req.params;
      const {userId} = req.body 
  
      const item = await ItemsModel.findById({_id:id});
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      let cartItem = await CartModel.findOne({userId:userId ,name:item.name });

      if (cartItem) {
      
        cartItem.quantity += 1;
        await cartItem.save();
        return res.status(200).json({ message: 'Quantity increased', data: cartItem });
      } else {
       const newCartItem = new CartModel({
          name: item.name,
          price: item.price,
          category: item.category,
          image: item.image,
          userId:userId,
          quantity: 1
        });
        await newCartItem.save();
        res.status(200).json({ success: true, message: 'Item added to cart', data: newCartItem });
      }
  
      
  
    } catch (error) {
      console.error('Error adding to cart:', error.message);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
 const getCartItems = async (req, res) => {
  try {
    const { userId } = req.params;

    const cartItems = await CartModel.find({ userId });

    if (cartItems.length === 0) {
      return res.status(200).json({ success: true, message: 'Cart is empty', data: [] });
    }

    res.status(200).json({ success: true, message: 'Cart items fetched', data: cartItems });
  } catch (error) {
    console.error('Error fetching cart items:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

  const deleteCartItem = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedItem = await CartModel.findOneAndDelete({ _id: id });
  
      if (!deletedItem) {
        return res.status(404).json({ success: false, message: 'Item not found or unauthorized' });
      }
  
      res.status(200).json({ success: true, message: 'Item removed', data: deletedItem });
    } catch (error) {
      console.error('Error deleting item:', error.message);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  const checkout = async(req,res)=>{
    try {
      const checkoutList = await CartModel.find()

      if(!checkoutList){
        return res.status(500).json({message:'no cekoutlist fount'})
      }
      res.status(200).json({success:true,data:checkoutList})
    } catch (error) {
      console.log('server error:',error.message)
      res.status(500).json({message:'server error:'+error.message})
    }

  }
module.exports ={getVegetables,getFruit,addToCart, getCartItems,deleteCartItem,checkout}