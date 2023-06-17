const mongoose=require("mongoose");

const Quizzschema=mongoose.Schema({
  quiz:Object,
  leaderboard:Array
});

const quizModel=mongoose.model("quiz",Quizzschema);


module.exports={quizModel};