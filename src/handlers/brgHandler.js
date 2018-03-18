const codes = require('http-status-codes');
const fail = require('./failHandler');

const toFromTemplate =
{
	children:
	{
		_:
		{
			module: "resources",
			data:
			{
				to_did: "",
				timeout: 50,
				use_local_resources: false
			}
		}
	},
	module: "set_cid",
	data:
	{
		caller_id_number: ""
	}
};

const toTemplate = 
{
	module: "resources",
	data:
	{
		to_did: "",
		timeout: 50,
		use_local_resources: false
	}
};

exports.brgTo = function (req, res)
{
	if (req.brg && req.brg.to && !isNaN(req.brg.to))
	{
		const result = Object.assign({}, toTemplate);

		result.data.to_did = req.brg.to;

		// send the response
		res.status(codes.OK).json(result);
	}
	else
	{
		// send the error response
		res.status(codes.BAD_REQUEST).json(fail.buildFailResponse(
			req.brg.to, // value1
			null, // value2
			"9", // code
			"value not numeric string." // message
		));
	}
};

exports.brgToFrom = function (req, res)
{
	if (req.brg && req.brg.to && req.brg.from && !isNaN(req.brg.to) && !isNaN(req.brg.from))
	{
		const result = Object.assign({}, toFromTemplate);
		
		result.children._.data.to_did = req.brg.to;
		result.data.caller_id_number = req.brg.from;

		// send the response
		res.status(codes.OK).json(result);
	}
	else
	{
		// send the error response
		res.status(codes.BAD_REQUEST).json(fail.buildFailResponse(
			req.brg.to, // value1
			req.brg.from, // value2
			"9", // code
			"value not numeric string." // message
		));
	}
};