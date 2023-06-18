// import Questions from "../models/questionSchema.js";
// import Results from "../models/resultSchema.js";

//import router from "./auth";

// import questions, { answers } from '../database/data.js'
const router = require("express").Router();
const Questions = require("../models/Questions");
const Results = require("../models/Result");
//const {questions,answers} = require("../Database/Data");
/** get all questions */
router.get("/getQuestion", async(req, res)=>{
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

)

/** insert all questinos */
router.post("/addQuestion",(req, res)=>{
    try {
        const data = Questions.insertMany({ questions, answers }, function(err, data){
            res.json(data)
        })
    } catch (error) {
        res.json({ error })
    }
}

) 

/** Delete all Questions */
router.post("/deleteQuestion",async(req, res)=>{
    try {
         await Questions.deleteMany();
         res.json({ msg: "Questions Deleted Successfully...!"});
    } catch (error) {
         res.json({ error })
    }
 })

/** get all result */
router.get("/getResults",async(req, res)=>{
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

) 

/** post all result */
router.post("/addResult",(req, res)=>{
    try {
         const { username, result, attempts, points, achived } = req.body;
         if(!username && !result) throw new Error('Data Not Provided...!');
 
         Results.create({ username, result, attempts, points, achived }, function(err, data){
             res.json({ msg : "Result Saved Successfully...!"})
         })
 
    } catch (error) {
         res.json({error})
    }
 }) 

/** delete all result */
router.post("/deleteResult",async(req, res)=>{
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}) 
module.exports=router