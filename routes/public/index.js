var router = require('express').Router();

router.get('/', (req, res, next) => {
    var obj = { success: true, api: "public" }
    res.send(obj).status(200);
});

module.exports = router;