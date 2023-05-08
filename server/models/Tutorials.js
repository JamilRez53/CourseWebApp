const mongoose = require("mongoose")

const QuestionSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    subtopic:{
        type: String,
        require: true,
    },
    heading: {
        type: String,
        required: true,
      },
      VideoUrl: {
        type: String,
        required: true,
      },
      
      
     
},
{ timestamps: true });
module.exports = mongoose.model("questions", QuestionSchema);