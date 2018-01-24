const express = require("express");
const app = express();
const http =require("http").Server(app);
const io = require("socket.io")(http);
const session = require("express-session");

var alluser = [];

app.set("view engine","ejs");

app.use(session({
	secret:"keyboard cat",
	resave:false,
	saveUninitialized:true
}));

app.use(express.static("./public"));

app.get("/",(req,res)=>{
	res.render("index");
});

app.get("/check",(req,res)=>{
	var yonghuming = req.query.yonghuming;
	if(!yonghuming){
		res.send("必须填写用户名");
		return;
	}
	if(alluser.indexOf(yonghuming) !=-1){
		res.send("用户名已被占用");
	}
	alluser.push(yonghuming);
	
	req.session.yonghuming = yonghuming;
	res.redirect("/chat");
});

app.get("/chat",(req,res)=>{
	if(!req.session.yonghuming){
		res.redirect("/");
		return;
	}
	res.render("chat",{
		"yonghuming":req.session.yonghuming
	});
})

io.on("connection",(socket)=>{
	socket.on("liaotian",function(msg){
		io.emit("liaotian",msg);
	})
})

http.listen(3000,()=>{
	console.log("server is running at port 3000");
})


