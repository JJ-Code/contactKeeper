const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check')
const User = require('../models/User.js')

//@route POST api/auth
//@desc Get logged in users
//@access Private
router.get('/', (req, res) => {
    res.send("Get logged in user");

}); 

//@route POST api/auth
//@desc Auth user and get token
//@access Public
router.post('/', [
      check('email', 'Please include a valid email').isEmail(),
      check('password', 'Password is required').exists()
    ], (req, res) => {
    res.send("Log in user");

});

//api/auth

module.exports = router;