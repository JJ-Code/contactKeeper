const express = require("express");
const router = express.Router();

//@route GET api/contacts
//@desc Get all users contacts
//@access Private
router.get("./", (req, res) => {
    res.send("Get all contacts");

}); 

//@route POST api/contacts
//@desc Create one contact
//@access Private
router.post("./", (req, res) => {
    res.send("Create contact");

}); 

//@route PUT api/contacts
//@desc Update one contact
//@access Private
router.put("./", (req, res) => {
    res.send("Update contacts");

});

//@route DELETE api/contacts
//@desc Delete one contact
//@access Private
router.delete("./", (req, res) => {
    res.send("Delete contact forever");

});



module.exports = router;