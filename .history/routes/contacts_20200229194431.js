const express = require("express");
const router = express.Router();

//@route GET api/contacts
//@desc Get all users contacts
//@access Private
router.get("./", (req, res) => {
    res.send("Get all contacts");

}); 

//@route POST api/contacts
//@desc Get all users contacts
//@access Private
router.post("./", (req, res) => {
    res.send("Create contacts");

}); 

//@route PUT api/contacts
//@desc Get all users contacts
//@access Private
router.put("./", (req, res) => {
    res.send("Create contacts");

});



module.exports = router;