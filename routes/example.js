const router = require('express').Router();
const verify = require('../../core/auth/verify');

router.get('/', verify, (req, res) => {

    const user = req.user;
    res.send(user);
})

module.exports = router;