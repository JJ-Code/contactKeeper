const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js')
const {
    check,
    validationResult
} = require('express-validator')
const User = require('../models/User.js')
const Contact = require('../models/Contact.js')

//@route GET api/contacts
//@desc Get all users contacts
//@access Private
// router.get('/',  (req, res) => {
//     res.send("Get all contacts");

// }); 

router.get('/', auth, async (req, res) => {
router.post(
    '/',
    [
        auth,
        [
            check('name', 'Name is required')
            .not()
            .isEmpty(),
            check('type', 'Type must be personal or professional').isIn([
                'personal',
                'professional'
            ])
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            name,
            email,
            phone,
            type
        } = req.body;

        try {
            const newContact = new Contact({
                name,
                email,
                phone,
                type,
                user: req.user.id
            });

            const contact = await newContact.save();

            res.json(contact);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);


//@route POST api/contacts
//@desc Create one contact
//@access Private

router.post('/', [
            auth,
            [
                check('name', 'Name is required')
                .not()
                .isEmpty(),
                check('type', 'Type must be personal or professional').isIn([
                    'personal',
                    'professional'
                ])
            ]
        ], (req, res) => {
    res.send("Create contact");
}); 

//@route PUT api/contacts/:id
//@desc Update one contact
//@access Private
router.put('/:id', (req, res) => {
    res.send("Update contact");

});

//@route DELETE api/contacts/:id
//@desc Delete one contact
//@access Private
router.delete('/:id', (req, res) => {
    res.send("Delete contact forever");

});



module.exports = router;