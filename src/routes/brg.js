const router = require('express').Router();
const handler = require('../handlers/brgHandler');

router.param('rTo', function (req, res, next, rTo)
{
	// create the brg object if we haven't already
	if (!req.brg)
	{
		req.brg = {};
	};

	// ensuring we have an ascii string
	req.brg.to = Buffer.from(rTo, 'utf8').toString('ascii');
	next();
});

router.param('rFrom', function (req, res, next, rFrom)
{
	// create the brg object if we haven't already
	if (!req.brg)
	{
		req.brg = {};
	};

	// ensuring we have an ascii string
	req.brg.from = Buffer.from(rFrom, 'utf8').toString('ascii');
	next();
});

router.get('/brg/:rTo/:rFrom', handler.brgToFrom);

router.get('/brg/:rTo', handler.brgTo);

module.exports = router;