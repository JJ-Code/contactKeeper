const express = require("express");
const router = express.Router();

//@route POST api/auth
//@desc Get logged in users
//@access Private
router.get("./", (req, res) => {
    res.send("Get logged in user");

}); 

//@route POST api/auth
//@desc Auth user and get token
//@access Public
router.get("./", (req, res) => {
    res.send("Log in user");

});

//api/auth


module.exports = router;