# pivot-nodejs
A nodejs port of [Pivot-ToolKit](https://github.com/fastdevice/Pivot-ToolKit.git) by [FastDevice](https://www.fastdeviceusa.com/).

# Requirements
* [nodejs v8.x](https://nodejs.org/en/download/)
* (optoinal) yarn
  * ```$ npm install -g yarn```

# Installation
## Clone the repo
```shell
$ git clone https://github.com/jessechoward/pivot-toolkit-nodejs.git
```

## Install the packages
npm
```shell
$ npm install
```

yarn
```shell
$ yarn
```

## Startup
You can specify the port to listen on via environment variable **PORT** or via command line argument. The default port will be 3000.

npm:
```shell
$ npm start 8080
```
yarn:
```shell
$ yarn start 8080
```

shell environment variable:
```shell
$ PORT=8080 npm start
```

By default the application will only listen on localhost. You can optionally control this behaviour by setting environment variable **LISTEN_INTERFACE**.

For example, here is how to listen on all interfaces.
```shell
$ LISTEN_INTERFACE='0.0.0.0' npm start 8080
```

# Usage
|API Endpoint|Params|Description|
|------------|------|-----------|
|/say/{text}|<ul><li>text - the text you want the app to repeat</li></ul>|Test if the application is running|
|/brg/{to}|<ul><li>to - the number to bridge the call to|Bridge a call to another number|
|/brg/{to}/{from}|<ul><li>to - the number to bridge the call to</li><li>from - the callerid of the from number</li></ul>|Bridge a call to another number originated from a specific number|

# Incomplete
The "/dcid" endpoint is as of now not usable and incomplete until I can get some test data to work with.

# Testing
Basic unit tests exist for the working endpoints using the tape and supertest libraries.

npm:
```shell
npm test
```

yarn:
```shell
yarn test
```