const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')
const views = require('koa-views')
const { resolve } = require('path')
app.use(logger())
app.use(views(resolve(__dirname,'./views'),{
	extension:'pug'
}))
app.use(async (ctx,next)=>{
	await ctx.render('index',{
		you:'haha',
		me:'gaga'
	})
})

app.listen(3001)