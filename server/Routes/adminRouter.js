const express = require('express');
const upload = require('../Middilweres/multer')
const {addItem,getItems,deleteItem, editItem, updateItem, getUserList, deleteUser} = require('../Controllers/AdminController')
const router = express.Router();

router.post('/additem',upload.single('image'),addItem);
router.get('/items',getItems);
router.delete('/delete/:id',deleteItem);
router.get('/editItem/:id',editItem);
router.put('/updateItem/:id',upload.single('image'),updateItem)
router.get('/userList',getUserList)
router.delete('/deleteUser/:id',deleteUser)

module.exports = router; 
