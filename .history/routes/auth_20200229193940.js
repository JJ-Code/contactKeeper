const express = require("express");
const router = express.Router();

//@route POST api/auth
//@desc Get logged in users
//@access Private
router.get("./", (req, res) => {
    res.send("Registers a user");

}); //api/auth


module.exports = router;