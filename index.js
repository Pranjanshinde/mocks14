const express=require("express");
var cors = require('cors');
const { connection } = require('./db');
const { Userrouter } = require("./Routes/USer.route");
const { quizRouter } = require("./Routes/Quiz.route");
const { Auth } = require("./middleware/Auth");
const app=express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("home page");
});


app.use("/users",Userrouter);

app.use(Auth);

app.use("/quize",quizRouter);

app.listen(8080,async()=>{
    try {
        console.log("Connecting");
        await connection;
        console.log("connected");
    } catch (error) {
        res.send({"msg":error.message})
    }
});
