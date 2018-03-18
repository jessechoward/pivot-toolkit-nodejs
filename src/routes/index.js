const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

// dynamically load route handlers in this directory
fs.readdirSync(__dirname)
	.filter(function (filename)
	{
		// make sure files are .js extensions and we don't include this file
		return filename !== basename && filename.indexOf('.') > 0 && path.extname(filename) === '.js';
	})
	.forEach(function (filename)
	{
		router.use(require(path.join(__dirname, filename)));
	});

// export the router that contains all the routers
module.exports = router;
