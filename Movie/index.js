const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')

app.use(logger())
app.use(async (ctx,next)=>{
	ctx.body="hello world"
})

app.listen(3000)