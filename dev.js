const Koa = require('koa');
const serve = require('koa-static');
const dev = new Koa();

dev.use(serve(__dirname + '/./dist'));

dev.listen(5337);

module.exports = dev;
