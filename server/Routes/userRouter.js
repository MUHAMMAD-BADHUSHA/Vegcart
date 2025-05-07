const express = require('express');
const { getVegetables, getFruit, addToCart, getCartItems, deleteCartItem } = require('../Controllers/UserController');
const router = express.Router();


router.get('/getVegetables',getVegetables);
router.get('/getFruits',getFruit);
router.post('/addtocart/:id',addToCart)
router.get('/getCartItems',getCartItems)
router.delete('/deleteCartItem/:id',deleteCartItem)

module.exports = router;
