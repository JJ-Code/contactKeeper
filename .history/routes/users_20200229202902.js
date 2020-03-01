const express = require('express');
const router = express.Router();
const User = require('../models/User.js')

//@route POST api/users
//@desc Register a user
//@access Public
router.post('/', 
[
check('name', 'name is required')
],  (req, res) => {
    // res.send("Registers a user");
    res.send(req.body);

}); //api/users


module.exports = router;
