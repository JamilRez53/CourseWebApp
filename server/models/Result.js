//import mongoose from "mongoose";
const mongoose = require("mongoose");
const { Schema } = mongoose;


/** result model */
const Result = new Schema({
    week :{ type: String  },
    userId : { type : String },
    // result : { type : Array, default : []},
    obtainedScore: { type: Number, default: 0},
    totalScore : { type : Number, default : 0},
    QuizResult : {type: String},
    // achived : { type : String, default : ''},
    createdAt : { type : Date, default : Date.now}
},
{unique:true}
)

module.exports = mongoose.model('result', Result);