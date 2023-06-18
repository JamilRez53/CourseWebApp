const Results = require("../models/Result");
const router = require('express').Router();
const mongoose = require('mongoose');
router.get("/findResult",async(req,res)=>{
  try {
    const res_data = await Results.find();
    let check = false ;
    if(res_data.length>0){
      
      for(i=0;i<res_data.length;i++){
        if((res_data[i]['week'].toLowerCase()===req.body.week.toLowerCase())&&(res_data[i]['userId'].toLowerCase()===req.body.userId.toLowerCase())){
            check=true;
            break;
        }
        else{
          check = false;
          break;
        }
      }
      
    }
    console.log(check)
    return res.json({data:check});
    
  } catch (error) {
    res.json(error);
  }
})
router.get("/getSingleResult/:id",async(req,res)=>{
  try{
    const result = await Results.findById(req.params.id);
    res.status(200).json(result);
}catch( error ){
    res.status(404).json({ message: error.message })
}
})
router.post("/postResult",async(req,res)=>{
  try {
     const res_data = await Results.find()
     if(res_data.length>0){
      let check = false;
      for(i=0;i<res_data.length;i++){
        if((res_data[i]['week'].toLowerCase()===req.body.week.toLowerCase())&&(res_data[i]['userId'].toLowerCase()===req.body.userId.toLowerCase())){
            check=true;
            break;
        }
      }
      if(check==false){
        const Result = new Results({
          week: req.body.week,
          userId: req.body.userId,
          obtainedScore: req.body.obtainedScore,
          totalScore: req.body.totalScore,
          QuizResult: req.body.QuizResult
        });
        //save question and response
        
         const result = await Result.save();
         res.status(200).json(result);
         return;
          
      }
      else{
       // res.status(404).send({success:false,msg:"You have already given the "+req.body.week+"test"});
       console.log( req.body.userId+" have already given the "+req.body.week+" test");
        } 
      }
      else{
        const Result = new Results({
          week: req.body.week,
          userId: req.body.userId,
          obtainedScore: req.body.obtainedScore,
          totalScore: req.body.totalScore,
          QuizResult: req.body.QuizResult
        });
        //save question and response
        
         const result = await Result.save();
         res.status(200).json(result);
         return;
      }
     }
     catch (err) {
      console.log(err)
     }
    

})
router.get("/getSingleUserResult/:userId",async(req,res)=>{
  try{
    const result = await Results.findOne({userId:req.params.userId});
    res.status(200).json(result);
}catch( error ){
    res.status(404).json({ message: error.message })
}
})
router.get("/getResult",async(req,res)=>{
    try {
        const allResult = await Results.find({});
        res.send({send:"ok",data:allResult});
      } catch (error) {
        res.json(error);
      }
})

router.post("/deleteResult",async(req,res)=>{
    const { resultid } = req.body;
try {
  Results.deleteOne({ _id: resultid }, function (err, res) {
    console.log(err);
  });
  res.send({ status: "Ok", data: "Deleted" });
} catch (error) {
  console.log(error);
}
})
module.exports = router;
router.get("/paginatedResults",async(req,res)=>{
  const allResult = await Results.find();
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  //const findname = req.params.name||"";
 // const search = req.query.search||"";
  const startIndex=(page-1)*limit;
  const lastIndex = (page)*limit

  const results={}
  results.totalResult = allResult.length;
  results.pageCount = Math.ceil(allResult.length/limit);
  if(lastIndex<allResult.length){
    results.next={
      page: page+1,
    }
  }
  if(startIndex>0){
    results.prev={
      page: page-1,
    }
  }
  results.result = allResult.slice(startIndex,lastIndex);
  res.json(results);
})
router.get("/searchResult/:week",async(req,res)=>{
  try {
    //const findUser = req.params.week;
    const searchedUser = await Results.find({"week":{$regex:'.*'+week+'.*'}})
    res.json(searchedUser); 
  } catch (error) {
    res.json(error);
  }
})
module.exports = router;