const mongoose = require("mongoose");

const TopicSchema = new mongoose.Schema({
    name:{
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
      description: {
        type: String,
        required: true,
        min: 6,
      },
      
      
     
},
{ timestamps: true });
module.exports = mongoose.model("topics", TopicSchema);