const Koa = require('koa');
const serve = require('koa-static');
const dev = new Koa();
const port = process.env.PORT || 8000;

dev.use(serve(__dirname + '/./dist'));

dev.listen(port);

module.exports = dev;
