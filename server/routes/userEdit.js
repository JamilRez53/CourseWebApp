const User = require("../models/User");
const router = require('express').Router();
const mongoose = require('mongoose');

router.get("/getSingleUser/:id",async(req,res)=>{
    try{
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
  }catch( error ){
      res.status(404).json({ message: error.message })
  }
  })
  router.put("/updateUser/:id",async(req,res)=>{
    const updateUser = ({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
    });
    //save Topic and response
    try {
    await User.updateOne({_id:req.params.id},updateUser);
     res.status(200).json(updateUser);
    } catch (err) {
     console.log(err)
    }
 })
module.exports=router;