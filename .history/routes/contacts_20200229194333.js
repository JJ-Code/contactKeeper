const express = require("express");
const router = express.Router();

//@route POST api/contacts
//@desc Get all users contacts
//@access Private
router.get("./", (req, res) => {
    res.send("Get all contacts");

}); //api/users


module.exports = router;