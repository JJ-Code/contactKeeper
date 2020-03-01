const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {check, validationResult } = require('express-validator/check')
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
  ], 
  async (req, res) => {
    // res.send("Registers a user");
    // res.send(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()

      })

    }
    //res.send('passed')

		const {
		  name,
		  email,
		  password
		} = req.body;

		try {
      //find user by email
		  let user = await User.findOne({
		    email
		  });

		  if (user) {
		    return res.status(400).json({
		      msg: 'User already exists'
		    });
		  }

      //creating a new user
      user = new User({
        name,
        email,
        password
      });

      //encrypt password
      //creating salt to hash 
      const salt = await bcrypt.genSalt(10);
      //encrypting and assigning back to user object
      user.password = await bcrypt.hash(password, salt);

      //saving user to databaase
      await user.save();
      res.send('user saved')

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error')
      

    }
  })


module.exports = router;