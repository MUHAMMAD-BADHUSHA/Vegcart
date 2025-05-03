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

module.exports ={getVegetables,getFruit}