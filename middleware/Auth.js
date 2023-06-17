
var jwt = require('jsonwebtoken');
const Auth = (req,res,next)=>{

    let token=req.headers.authorization;
    console.log(token);
    if(token)
    {
        var decoded = jwt.verify(token, 'masai');
        if(decoded)
        {
            req.body.userid=decoded.userid;
            next();
        }
    }else{
        res.send({"msg":"kindly login"});
    }
}

module.exports={Auth};