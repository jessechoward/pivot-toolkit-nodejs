const codes = require('http-status-codes');
const fail = require('./failHandler');

exports.say = function (req, res)
{
	// they said something
	if (req.say)
	{
		res.status(codes.OK).json(
		{
			module: "tts",
			data:
			{
				text: req.say
			}
		});
	}
	else
	{
		 // Error - Failed request
		res.status(codes.BAD_REQUEST).json(fail.buildFailResponse(
			req.say, // value1
			null, // value 2
			"9", // code
			"missing string." // message
		));
	}
};