const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');


// barse body and url params
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// log requests similar to apache
app.use(morgan('combined'));

// use the routes we define in the routes folder
app.use(require('./routes'));

// expect an environment variable or first command line arg
// to specify the port at runtime
const port = process.env.PORT || process.argv[2] || 3000;
const hostname = process.env.LISTEN_INTERFACE || 'localhost';

// start listening on the defined port
const server = app.listen(port, hostname, function ()
{
	console.log(`Listening on ${server.address().address} port ${server.address().port}`);
});

// export the server
module.exports = server;