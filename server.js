const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const app = express();
const httpServer = http.createServer(app);
// const io=socketIO(httpServer)
const cors = require("cors");
const port = 4000;
// 
const io = require("socket.io")(httpServer, {
	cors: {
	  origin: "http://localhost:3000",
	  methods: ["GET", "POST"],
	  allowedHeaders: ["my-custom-header"],
	  credentials: true
	}
  });
  app.get("/", (req, res) => res.send("Hello World!"));

io.on('connection',(socket)=>{
	console.log('new user connection' , socket.id) 
	socket.on("join",({name,room})=>{
		console.log("user name and room " , name,room)
	})


	socket.on('disconnect',()=>{
		console.log("user has left")
	})
})


httpServer.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
