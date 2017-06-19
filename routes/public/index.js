var router = require('express').Router();

/**
 * @api {get} / Simple Get Request
 * @apiName Public Get
 * @apiGroup Public
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": "true",
 *       "api": "public"
 *     }
 * @apiErrorExample Error-Response:
 *     {
 *       "success": "false"
 *     }
 */

router.get('/', (req, res, next) => {
	debug(req.query)
    var obj = { success: true, api: "public" }
    res.send(obj).status(200);
});

module.exports = router;