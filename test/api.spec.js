const test = require('tape');
const request = require('supertest');
const codes = require('http-status-codes');
const app = require('../src/index');


test('Test endpoint: GET /say/{text}', function (assert)
{
	request(app)
		.get('/say/hello')
		.expect(codes.OK)
		.expect('Content-Type', /json/)
		.end(function (error, res)
		{
			assert.error(error, 'No Error');
			assert.equal(res.body.data.text, 'hello', 'the response text is hello');
			assert.end();
		});
});

test('Test endpoint: GET /brg/{to}', function (assert)
{
	request(app)
		.get('/brg/3125551234')
		.expect(codes.OK)
		.expect('Content-Type', /json/)
		.end(function (error, res)
		{
			assert.error(error, 'No Error');
			assert.equal(res.body.data.to_did, '3125551234', 'the to_did is 3125551234');
			assert.end();
		});
});

test('Test endpoint: GET /brg/{to}/{from}', function (assert)
{
	request(app)
		.get('/brg/3125551234/7735551234')
		.expect(codes.OK)
		.expect('Content-Type', /json/)
		.end(function (error, res)
		{
			assert.error(error, 'No Error');
			assert.equal(res.body.children._.data.to_did, '3125551234', 'to_did is 3125551234');
			assert.equal(res.body.data.caller_id_number, '7735551234', 'caller_id_number is 7735551234');
			assert.end();
		});
});

test('Exit', function (assert)
{
	assert.end();
	process.exit(0);
});