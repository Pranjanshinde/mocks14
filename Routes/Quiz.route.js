const express=require("express");
var jwt = require('jsonwebtoken');
const { quizModel } = require("../Model/Quizz.model");

const quizRouter=express.Router();


quizRouter.post("/",async(req,res)=>{
    try {
        let user=new quizModel(req.body);
        await user.save();
        res.send({"msg":"new quiz added"});

    } catch (error) {
        res.send({"msg":error.message});
    }
});

quizRouter.get("/",async(req,res)=>{
    try {
      let quizes= await quizModel.find();
      res.send(quizes);

    } catch (error) {
        res.send({"msg":error.message});
    }
});

quizRouter.get("/:id",async(req,res)=>{
    try {
        const {id}=req.params;
      let quizes= await quizModel.find({_id:id});
      res.send(quizes);

    } catch (error) {
        res.send({"msg":error.message});
    }
});

quizRouter.patch("/:id",async(req,res)=>{
    try {
      const {id}=req.params;

      await quizModel.findByIdAndUpdate({_id:id},req.body);
      res.send({"msg":"User has been updated"});

    } catch (error) {
        res.send({"msg":error.message});
    }
});

quizRouter.delete("/:id",async(req,res)=>{
    try {
      const {id}=req.params;

      await quizModel.findByIdAndDelete({_id:id});
      res.send({"msg":"User has been delete"});

    } catch (error) {
        res.send({"msg":error.message});
    }
});

quizRouter.patch("/submit/:id",async(req,res)=>{
    try {
      const {id}=req.params;
        let quize=await quizModel.findOne({_id:id});
        quize.leaderboard.push(req.body);
        
      await quizModel.findByIdAndUpdate({_id:id},quize);
      res.send({"msg":"Response submitted"});

    } catch (error) {
        res.send({"msg":error.message});
    }
});





module.exports={quizRouter};


// {
//     "email":"jayesh@123",
//    "password":"jayesh"
// }
