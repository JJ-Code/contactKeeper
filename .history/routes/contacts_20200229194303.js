const express = require("express");
const router = express.Router();

//@route POST api/contacts
//@desc Get all users contacts
//@access Private
router.post("./", (req, res) => {
    res.send("Registers a user");

}); //api/users


module.exports = router;