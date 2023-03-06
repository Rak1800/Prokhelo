const { findOneAndUpdate } = require("../userModel/user");
const user = require("../userModel/user");

const createUser=async (req,res)=>{
    const data=req.body
    const {name,email,password}=data
    if(Object.keys(data).length==0) return res.status(400).send({status:false,message:"please provide some data"});
    if(!name) return res.status(400).send({status:false,message:"please provide some data"});
    if(!email) return res.status(400).send({status:false,message:"please provide some data"});
    if(!password ) return res.status(400).send({status:false,message:"please provide some data"});
    const saveData=await user.create(data)
    return res.status(201).send({status:true,message:"create successfull", data:saveData})

}
const logInuser= async (req,res)=>{
    const data=req.body 
    const {email,password}=data
    if(!email) return res.status(400).send({status:false,message:"please provide some data"});
    if(!password ) return res.status(400).send({status:false,message:"please provide some data"});
    const checkuser=await user.findOne({email:email,password:password})
    if(!checkuser) return res.status(404).send({status:false,message:"user not found"});
    res.status(200).send({status:true,message:"login succussful"})
}
const users=async (req,res)=>{
      const users=await user.find()
      res.send({status:true,message:"all users",users})
}

const updateUser=async (req,res)=>{
   const userId=req.params.userId
   const checkuser=await user.findOne({_id:userId})
   if(!checkuser) return res.status(404).send({status:false,message:"user not found"});
   const data=req.body
   const {name,email,password}=data
   const editUser=await user.findOneAndUpdate({_id:userId},{
    $set:{
        name:name,
        email:email,
        password:password
    }
   },{new:true})
   res.status(200).send({status:true,message:"update Succussful", editUser})
}
module.exports={createUser,logInuser,users,updateUser}