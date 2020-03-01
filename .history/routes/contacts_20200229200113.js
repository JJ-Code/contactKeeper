const express = require('express');
const router = express.Router();

//@route GET api/contacts
//@desc Get all users contacts
//@access Private
router.get('/', (req, res) => {
    res.send("Get all contacts");

}); 

//@route POST api/contacts
//@desc Create one contact
//@access Private
router.post('/', (req, res) => {
    res.send("Create contact");

}); 

//@route PUT api/contacts/:id
//@desc Update one contact
//@access Private
rrouter.post('/:id', (req, res) => {
    res.send("Update contact");

});

//@route DELETE api/contacts/:id
//@desc Delete one contact
//@access Private
router.delete("./:id", (req, res) => {
    res.send("Delete contact forever");

});



module.exports = router;