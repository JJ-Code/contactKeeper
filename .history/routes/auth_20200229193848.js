const express = require("express");
const router = express.Router();

//@route POST api/auth
//@desc Register a user
//@access Public
router.get("./", (req, res) => {
    res.send("Registers a user");

}); //api/users


module.exports = router;