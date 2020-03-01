const express = require("express");
const router = express.Router();

//@route GET api/contacts
//@desc Get all users contacts
//@access Private
router.get("./", (req, res) => {
    res.send("Get all contacts");

}); //api/users

//@route POST api/contacts
//@desc Get all users contacts
//@access Private
router.post("./", (req, res) => {
    res.send("Create contacts");

}); //api/users



module.exports = router;