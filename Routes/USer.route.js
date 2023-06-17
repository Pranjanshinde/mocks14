const express=require("express");
const bcrypt = require('bcrypt');
const { userModel } = require("../Model/USer.model");
const Userrouter=express.Router();
var jwt = require('jsonwebtoken');

Userrouter.post("/register",async(req,res)=>{
    try {
        const {email,password}=req.body;
        bcrypt.hash(password, 3,async function(err, hash) {
            // Store hash in your password DB.
            let user=new userModel({
                email:email,
                password:hash
            });
            await user.save();
            res.send({"msg":"New user registered"});
        });
    } catch (error) {
        res.send({"msg":error.message})
    }
});


Userrouter.post("/login",async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user = await userModel.findOne({email:email});

        if(user)
        {
            bcrypt.compare(password, user.password, function(err, result) {
                // result == true
                var token = jwt.sign({ userid:user._id }, 'masai');
                res.send({"msg":"login succeefull","token":token,"user":user});
            });
        }
    } catch (error) {
        res.send({"msg":error.message})
    }
});





module.exports={Userrouter}