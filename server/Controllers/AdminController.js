const ItemsModel = require('../Models/ItemsModel')


const addItem = async(req, res) => {
    try {
        const { name, price, category } = req.body;
        const image = req.file?.filename;

        if (!name || !price || !category || !image) {
          return res.status(400).json({ message: 'All fields are required' });
        }

        const newItem = new ItemsModel({name,price,category,image:`/uploads/${image}`})
        await newItem.save()
        
        res.status(200).json({success:true,message:'Item added',data:newItem})
    } catch (error) {
        console.error('server error',error)
        res.status(500).json({message:'server error',error})
    }
}

const getItems =async(req,res) => {
    try {
        
        const resItems = await ItemsModel.find()
        res.status(200).json({success:true,data:resItems})

    } catch (error) {
        console.error('server error',error)
        res.status(500).json({message:'server error',error})
    }
}
const deleteItem = async(req,res)=>{
    try {
        const {id} =req.params
        const deleteItem= await ItemsModel.findByIdAndDelete({_id:id})
        res.status(200).json({success:true,message:'item deleted',})
    } catch (error) {
        console.log('deletion Err',error)
        res.status(400).json({success:false,message:'Err in server:',error})
    }
}

const editItem = async (req, res) => {
    try {
      const { id } = req.params;
      const item = await ItemsModel.findById(id);
  
      if (!item) {
        return res.status(404).json({ success: false, message: "Item not found" });
      }
  
      res.status(200).json({ success: true, data: item });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error', error });
    }
  };

  const updateItem = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, price, category } = req.body;
      const image = req.file?.filename;
  
      const updateData = {name,price, category,};
  
      if (image) {
        updateData.image = `/uploads/${image}`;
      }
  
      const updatedItem = await ItemsModel.findByIdAndUpdate(id, updateData, {
        new: true,
      });
  
      if (!updatedItem) {
        return res.status(404).json({ success: false, message: 'Item not found' });
      }
  
      res.status(200).json({ success: true, message: 'Item updated', data: updatedItem });
    } catch (error) {
      console.log('updating server error:', error);
      res.status(500).json({ success: false, message: 'Server error', error });
    }
  };
  
module.exports = {addItem,getItems,deleteItem,editItem,updateItem}