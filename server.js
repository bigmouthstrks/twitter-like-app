const express = require('express');
const serveStatic = require('serve-static');
const history = require('connec-history-api-fallbackt');
const enforce = require('express-sslify');

const app = express();

app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(serveStatic( __dirname + '/dist' ));
app.use(history());

app.list(process.env.PORT || 5000);