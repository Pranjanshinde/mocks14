const mongoose=require("mongoose");

const connection=mongoose.connect(`mongodb+srv://pranjanshinde:pranjanshinde@cluster0.q8f2diw.mongodb.net/mock14?retryWrites=true&w=majority`);


module.exports={connection};