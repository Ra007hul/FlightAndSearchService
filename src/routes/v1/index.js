const express = require('express');
const CityController= require('../../controllers/controller');

const router = express.Router();

router.post('/city', CityController.create());

module.exports= router;