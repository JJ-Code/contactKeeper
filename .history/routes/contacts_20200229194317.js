const express = require("express");
const router = express.Router();

//@route POST api/contacts
//@desc Get all users contacts
//@access Private
router.post("./", (req, res) => {
    res.send("Get all contacts");

}); //api/users


module.exports = router;