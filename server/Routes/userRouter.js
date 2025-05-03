const express = require('express');
const { getVegetables, getFruit } = require('../Controllers/UserController');
const router = express.Router();


router.get('/getVegetables',getVegetables);
router.get('/getFruits',getFruit);

module.exports = router;
