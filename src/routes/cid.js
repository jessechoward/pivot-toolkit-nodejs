const router = require('express').Router();
const handler = require('../handlers/cidHandler');

router.get('/dcid', handler.cid);

// export the router
module.exports = router;