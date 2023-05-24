const Topics = require("../models/Topics");
const router = require('express').Router();
const mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;
const slugify = require('slugify');
router.get("/getTopics",async(req,res)=>{
   
      try {
        const allTopics = await Topics.find({});
        res.send({send:"ok",data:allTopics});
      } catch (error) {
        res.json(error);
      }

})

router.get("/getSingleTopics/:id",async(req,res)=>{
  try{
    const topic = await Topics.findById(req.params.id);
    res.status(200).json(topic);
}catch( error ){
    res.status(404).json({ message: error.message })
}
})
router.post("/addTopics",async(req,res)=>{
    //create new topic
    // const newTopic = new Topics({
    //     name: req.body.name,
    //     heading:req.body.heading,
    //     description: req.body.description,
    //     //descs: req.body.description,
    //   });
    //   //save Topic and response
    //   try {
    //    const topic = await newTopic.save();
    //    res.status(200).json(topic);
    //    return;
    //   } catch (err) {
    //    console.log(err)
    //   }
    const { name,heading,description } = req.body;
    const slug = slugify(name);
    // validate
    switch (true) {
        case !name:
            return res.status(400).json({ error: 'Title is required' });
            break;
        case !heading:
            return res.status(400).json({ error: 'heading is required' });
            break;
        case !description:
            return res.status(400).json({ error: 'Content is required' });
            break;
    }
    // create post
    Topics.create({ name, heading, description,slug }, (err, topic) => {
        if (err) {
            console.log(err);
            res.status(400).json({ error: 'Duplicate post. Try another title' });
        }
        res.json(topic);
    });
})
router.put("/updateTopics/:id",async(req,res)=>{
  const updateTopic = ({
    name: req.body.name,
    heading: req.body.heading,
    description: req.body.description,
  });
  //save Topic and response
  try {
  await Topics.updateOne({_id:req.params.id},updateTopic);
   res.status(200).json(updateTopic);
  } catch (err) {
   console.log(err)
  }
  // const { slug } = req.params;
  // //var myId = req.params;
  //   const { name, heading,description } = req.body;
  //   Topics.findByIdAndUpdate({slug} , { name, heading,description }, { new: true }).exec((err, topic) => {
  //       if (err) console.log(err);
  //       res.json(topic);
  //   });

})
router.post("/deleteTopics",async(req,res)=>{
    const { topicid } = req.body;
  try {
    Topics.deleteOne({ _id: topicid }, function (err, res) {
      console.log(err);
    });
    res.send({ status: "Ok", data: "Deleted" });
  } catch (error) {
    console.log(error);
  }
})
router.get("/paginatedTopics",async(req,res)=>{
  const allTopics = await Topics.find();
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const findname = req.params.name||"";
 // const search = req.query.search||"";
  const startIndex=(page-1)*limit;
  const lastIndex = (page)*limit

  const results={}
  results.totalTopics = allTopics.length;
  results.pageCount = Math.ceil(allTopics.length/limit);
  if(lastIndex<allTopics.length){
    results.next={
      page: page+1,
    }
  }
  if(startIndex>0){
    results.prev={
      page: page-1,
    }
  }
  results.result = allTopics.slice(startIndex,lastIndex);
  res.json(results);
})
router.get("/searchTopic/:name",async(req,res)=>{
  try {
    const findname = req.params.name;
    const searchedTopic = await Topics.find({"name":{$regex:'.*'+findname+'.*'}})
    res.json(searchedTopic); 
  } catch (error) {
    res.json(error);
  }
})
module.exports = router;
    
  
  
  