"use strict";
exports.__esModule = true;
var fs = require("fs");
var https = require("https");
var jsonServer = require("json-server");
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.post('/login', function (req, resp) {
    resp.json({ message: 'ok' });
});
// Use default router
server.use(router);
var options = {
    cert: fs.readFileSync('./backend/keys/cert.pem'),
    key: fs.readFileSync('./backend/keys/key.pem')
};
https.createServer(options, server).listen(3000, function () {
    console.log('JSON Server is running');
});
