const db = require("../model");
const sequelize = db.sequelize;
const users = db.users;
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "NOTEAPI";

const signup = async(req,res) =>{
  const {name,email,password,mobile}=req.body;
  try{
    const existingUser = await users.findOne({where:{email:email}});
    if(existingUser){
      return res.status(400).json({msg:"User already exists"});

    }
    const hashedPassword = await bcrypt.hash(password,10);
    const result = await users.create({

      name:name,
      email:email,
      password:hashedPassword,
      mobile:mobile,

    });
    const token = jwt.sign({email:result.email,id:result.id},SECRET_KEY);
    res.status(201).json({users:result,token:token});
  }catch(error){
    console.log(error);
    res.status(500).json({msg:"something went wrong"});
  }
}
const signin = async(req,res) =>{
  const {email,password}=req.body;
  try{
    const existingUser = await users.findOne({where:{email:email}});
    
    if(!existingUser){
      return res.status(404).json({msg:"User not found"});
    }
    const matchPassword = await bcrypt.compare(password,existingUser.password);
    if(!matchPassword){
      return res.status(400).json({msg:"Invalid Credentials"});
    }
    const token = jwt.sign({email:existingUser.email,id:existingUser.id},SECRET_KEY);
    res.status(201).json({users:existingUser,token:token});
  }catch(error){
    console.log(error);
    res.status(500).json({msg:"something went wrong"});
}
}
module.exports = {signup,signin};