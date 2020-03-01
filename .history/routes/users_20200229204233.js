const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check')
const User = require('../models/User.js')

//@route POST api/users
//@desc Register a user
//@access Public
router.post('/',
  [
    check('name', 'Name is required')
    .not()
    .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({
      min: 6
    })
  ], (req, res) => {
    // res.send("Registers a user");
    // res.send(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()

      })

    }
    //res.send('passed')

    const { name, email, password } = req.body;
    try {
      //find user by email
      let user = await User.findOne({email});

      if(user){
        return res.status(400).json({msg: 'User already exists'})
      }
      user = 

    }
    catch(){

    }
  })


module.exports = router;