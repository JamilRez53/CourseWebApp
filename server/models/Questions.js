const mongoose = require("mongoose")

const QuestionSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
      description: {
        type: String,
        required: true,
        min: 6,
      },
      
      
     
},
{ timestamps: true });
module.exports = mongoose.model("questions", QuestionSchema);