const Tutorials = require("../models/Tutorials");
const router = require('express').Router();
const multer = require('multer')
const mongoose = require('mongoose');
const fs= require('fs');
const path=require('path');
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        if (!fs.existsSync("public")) {
            fs.mkdirSync("public");
          }
      
          if (!fs.existsSync("public/videos")) {
            fs.mkdirSync("public/videos");
          }
      
          cb(null, "public/videos");
    },
    filename: function (req, file, cb) {
        //date.now() prevent kore same name e file upload korle shetake over ride kora theke biroto rakhe
        cb(null, Date.now() + file.originalname);
      },
})
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);

    if (ext !== ".mkv" && ext !== ".mp4") {
      return cb(new Error("Only videos are allowed!"));
    }

    cb(null, true);
  },
})
router.get("/getTutorials",async(req,res)=>{
   
      try {
        const allTutorials = await Tutorials.find({});
        res.send({send:"ok",data:allTutorials});
      } catch (error) {
        res.json(error);
      }

})
router.get("/getSingleTutorial/:id",async(req,res)=>{
  try{
    const tutorial = await Tutorials.findById(req.params.id);
    res.status(200).json(tutorial);
}catch( error ){
    res.status(404).json({ message: error.message })
}
})
router.post("/addTutorial", upload.fields([
    {
      name: "videos",
      maxCount: 5,
    },
  ]),async(req,res)=>{
    //create new topic
    let videosPaths = [];

    if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
      for (let video of req.files.videos) {
        videosPaths.push("/" + video.path);
      }
    }
  
    const newTutorial = new Tutorials({
        name: req.body.name,
        description: req.body.description,
        videos: videosPaths
      });
      //save Topic and response
      try {
       const tutorial = await newTutorial.save();
       res.status(200).json(tutorial);
       return;
      } catch (err) {
       console.log(err)
      }
    
})
router.post("/updateTutorial/:id",async(req,res)=>{

  const updateTutorial = ({
    name: req.body.name,
    description: req.body.description,
  });
  //save Topic and response
  try {
   await Tutorials.updateOne({_id:req.params.id},updateTutorial);
   res.status(200).json(updateTutorial);
  } catch (err) {
   console.log(err)
  }

})
router.post("/deleteTutorials",async(req,res)=>{
    const { tutorialid } = req.body;
  try {
    Tutorials.deleteOne({ _id: tutorialid }, function (err, res) {
      console.log(err);
    });
    res.send({ status: "Ok", data: "Deleted" });
  } catch (error) {
    console.log(error);
  }
})
router.get("/paginatedTutorials",async(req,res)=>{
  const allTutorials = await Tutorials.find();
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  //const findname = req.params.name||"";
 // const search = req.query.search||"";
  const startIndex=(page-1)*limit;
  const lastIndex = (page)*limit

  const results={}
  results.totalTutorials = allTutorials.length;
  results.pageCount = Math.ceil(allTutorials.length/limit);
  if(lastIndex<allTutorials.length){
    results.next={
      page: page+1,
    }
  }
  if(startIndex>0){
    results.prev={
      page: page-1,
    }
  }
  results.result = allTutorials.slice(startIndex,lastIndex);
  res.json(results);
})
router.get("/searchTutorial/:name",async(req,res)=>{
  try {
    const findname = req.params.name;
    const searchedTutorial = await Tutorials.find({"name":{$regex:'.*'+findname+'.*'}})
    res.json(searchedTutorial); 
  } catch (error) {
    res.json(error);
  }
})
module.exports = router;
    
  
  
  