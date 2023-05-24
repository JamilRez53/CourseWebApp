const Questions = require("../models/Questions");
const router = require('express').Router()

router.get("/getQuestions",async(req,res)=>{
   
    try {
      const allQuestions = await Questions.find({});
      res.send({send:"ok",data:allQuestions});
    } catch (error) {
      res.json(error);
    }

})
router.get("/getSingleQuestion/:id",async(req,res)=>{
try{
  const question = await Questions.findById(req.params.id);
  res.status(200).json(question);
}catch( error ){
  res.status(404).json({ message: error.message })
}
})
router.post("/addQuestions",async(req,res)=>{
  //create new question
  // const optionarray=[]
  // const optionfield = req.body.options
  // optionarray.push(optionfield);
  const newQuestion = new Questions({
      name: req.body.name,
      options: req.body.options,
      description: req.body.description,
    });
    //save question and response
    try {
     const question = await newQuestion.save();
     res.status(200).json(question);
     return;
    } catch (err) {
     console.log(err)
    }
  
})
router.post("/updateQuestion/:id",async(req,res)=>{
  const optionarray=[]
  const optionfield = req.body.options;
  optionarray.push(optionfield)
const updateQuestion = ({
  name: req.body.name,
  options: optionarray,
  description: req.body.description,
});
//save Question and response
try {
 await Questions.updateOne({_id:req.params.id},updateQuestion);
 res.status(200).json(updateQuestion);
} catch (err) {
 console.log(err)
}

})
router.post("/deleteQuestion",async(req,res)=>{
  const { Questionid } = req.body;
try {
  Questions.deleteOne({ _id: Questionid }, function (err, res) {
    console.log(err);
  });
  res.send({ status: "Ok", data: "Deleted" });
} catch (error) {
  console.log(error);
}
})
router.get("/paginatedQuestions",async(req,res)=>{
const allQuestions = await Questions.find();
const page = parseInt(req.query.page);
const limit = parseInt(req.query.limit);
const startIndex=(page-1)*limit;
const lastIndex = (page)*limit

const results={}
results.totalQuestions = allQuestions.length;
results.pageCount = Math.ceil(allQuestions.length/limit);
if(lastIndex<allQuestions.length){
  results.next={
    page: page+1,
  }
}
if(startIndex>0){
  results.prev={
    page: page-1,
  }
}
results.result = allQuestions.slice(startIndex,lastIndex);
res.json(results);
})
router.get("/searchQuestion/:name",async(req,res)=>{
try {
  const findname = req.params.name;
  const searchedQuestion = await Questions.find({"name":{$regex:'.*'+findname+'.*'}})
  res.json(searchedQuestion); 
} catch (error) {
  res.json(error);
}
})
module.exports = router;
