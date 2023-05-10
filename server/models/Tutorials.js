const mongoose = require("mongoose")

const QuestionSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
   
    description: {
        type: String,
        required: true,
      },
      videos: [
        {type: String,
        required: true,}
        ],
      
      
     
},
{ timestamps: true });
module.exports = mongoose.model("tutorials", QuestionSchema);