const codes = require('http-status-codes');
const fail = require('./failHandler');

const pivotTemplate =
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

exports.cid = function (req, res)
{
	/**
	 * It would be ideal to know what this black magic is doing.
	 * 
	 * Our JSON or urlencoded body has already been parsed by our middleware
	 * earlier in the request process so need to know what these magic
	 * numbers '2' and '3' represent in terms of the full request.
	 * 
	 * Here is the relevant php code I would like to replace
	 * 
	 * $request = \filter_input(\INPUT_GET, "To", FILTER_SANITIZE_STRING);
         // group digits to array
         $dial_array = explode('*', $request);
         
         // assign digit groupings
         // $feature_code = $dial_array['1'];
         $from = $dial_array['2'];
         $to = $dial_array['3'];
	 */

	 // the request body has already been parsed into a json object
	 // just need to know the field mappings...
	 const from = res.body.from || NaN;
	 const to = res.body.to || NaN;
	 
	 if (!isNaN(to) && !isNaN(from))
	 {
		 // copy the template
		 const result = Object.assign({}, pivotTemplate);

		 result.children._.data.to_did = to;
		 result.data.caller_id_number = from;

		 res.status(codes.OK).json(result);
	 }
	 else
	 {
		result.payload.value1 = to;
		result.payload.value2 = from;
		result.error.code = "9";
		result.error.message = "Invalid Format";

		result.status(codes.BAD_REQUEST).json(fail.buildFailResponse(
			to, // value1
			from, // value2
			"9", // code
			"Invalid Format" // message
		));
	 }
};