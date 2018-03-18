const failTemplate =
{
	success: false,
	payload:
	{
		value1: "",
		value2: ""
	},
	error:
	{
		code: "",
		message: ""
	}
};

exports.buildFailResponse = function (v1, v2, code, message)
{
	const response =
	{
		success: false,
		payload:
		{
			value1: v1 || "",
			value2: v2 || "",
		},
		error:
		{
			code: code || "",
			message: message || ""
		}
	};

	return response;
}