const router = require('express').Router();
const handler = require('../handlers/sayHandler');

// validate and parse any params matching :text
router.param('text', function (req, res, next, text)
{
	// ensuring we have an ascii string
	req.say = Buffer.from(text, 'utf8').toString('ascii');
	next();
});

// using a handler for this route is a bit overkill
// but consistency is everything...
router.get('/say/:text', handler.say);


// export the router we built
module.exports = router;