//@route POST api/auth
//@desc Get logged in users
//@access Private
router.get("./", (req, res) => {
    res.send("Get logged in user");

});