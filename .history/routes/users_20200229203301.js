const express = require('express');
const router = express.Router();
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
	
  }); //api/users


module.exports = router;