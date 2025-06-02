const express = require('express');
const { getVegetables, getFruit, addToCart, getCartItems, deleteCartItem ,checkout, getOrders} = require('../Controllers/UserController');
const auth = require('../Middilweres/auth')
const router = express.Router();


router.get('/getVegetables',getVegetables);
router.get('/getFruits',getFruit);
router.post('/addtocart/:id',addToCart)
router.get('/getCartItems/:userId',getCartItems)
router.delete('/deleteCartItem/:id',deleteCartItem)
router.get('/checkout',checkout)
router.get('/order/:userId',getOrders)

module.exports = router;
