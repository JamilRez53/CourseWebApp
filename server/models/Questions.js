const mongoose = require("mongoose")

const QuestionSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    options:[{
     type: String,
     require: true,
    }],
      description: {
        type: String,
        required: true,
        min: 6,
      },
      
      
     
},
{ timestamps: true });
module.exports = mongoose.model("questions", QuestionSchema);