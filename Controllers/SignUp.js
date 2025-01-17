const User = require("../model/UserModel");
const {createSecretToken} = require("../Util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.SignUp = async(req , res , next)=>{

    try{
        const {email,username,password,createdAt} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
           return res.json({message : "User already Exists!"});
        }
        const user = await User.create({email,username,password,createdAt});
        const token = createSecretToken(user._id)
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
          });
          res
            .status(201)
            .json({ message: "User signed in successfully", success: true, user });
          next();
    } catch (error) {
          console.error(error);
        }
    
}

