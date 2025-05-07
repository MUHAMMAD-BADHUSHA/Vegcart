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

const addToCart = async(req,res)=>{
    try {
        const {id} = req.params
        const Item = await ItemsModel.findById(id)
        if(!Item){
            return res.status(500).json({message:'item not found'})
        }
        const CartItem = new CartModel({name:Item.name,price:Item.price,category:Item.category,image:Item.image})
        await CartItem.save()

        res.status(200).json({success:true,message:'added to cart',data:CartItem})
    } catch (error) {
        console.log('error adding to cart:',error.message)
        res.status(500).json({message:'servererror',error})
    }
}
const getCartItems = async(req,res)=>{
    try {
        
        const CartItems = await CartModel.find()
        if(!CartItems){
            return res.status(500).json({message:'cart is emty'})
        }
       

        res.status(200).json({success:true,message:'cart items ',data:CartItems})
    } catch (error) {
        console.log('error fetch cart items:',error.message)
        res.status(500).json({message:'server error',error})
    }
}

const deleteCartItem = async(req,res)=>{
    try {
        const {id}=req.params

        const deleteCartItem = await CartModel.findByIdAndDelete(id)

        res.status(200).json({success:true,message:'item removed',data:deleteCartItem})
        
    } catch (error) {
      console.log(error);
        
    }
} 

module.exports ={getVegetables,getFruit,addToCart, getCartItems,deleteCartItem}