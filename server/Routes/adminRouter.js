const express = require('express');
const upload = require('../Middilweres/multer')
const {addItem,getItems,deleteItem, editItem, updateItem} = require('../Controllers/AdminController')
const router = express.Router();

router.post('/additem',upload.single('image'),addItem);
router.get('/items',getItems);
router.delete('/delete/:id',deleteItem);
router.get('/editItem/:id',editItem);
router.put('/updateItem/:id',upload.single('image'),updateItem)

module.exports = router; 
