var express = require('express');

var router = express.Router();
const authcontroller=require('../controllers/auth.controllers');

/* GET users listing. */
router.post('/signup',authcontroller.signup);
router.post('/signin',authcontroller.signin);
module.exports = router;
