const express = require('express');
const router = express.Router();
const User = require()

//@route POST api/users
//@desc Register a user
//@access Public
router.post('/',  (req, res) => {
    res.send("Registers a user");

}); //api/users


module.exports = router;
