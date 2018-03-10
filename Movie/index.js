const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')
const normal = require('./tpl/normal');
app.use(logger())
app.use(async (ctx,next)=>{
	ctx.type="text/html; charset=utf-8"
	ctx.body=normal
})

app.listen(3001)