const mongoose = require("mongoose");
const sanitizeHtml = require('sanitize-html')
const { ObjectId } = mongoose.Schema;
const TopicSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    snippets:{ type: String },
    heading:{
      type: String,
      require: true,
    },
  //   slug: {
  //     type: String,
  //     unique: true,
  //     index: true,
  //     lowercase: true
  // },
  day:{
    type:String,
    require: true
  },
  lesson:{
    type:String,
    require: true
  },
    // descs:{
    //  type: String,
    //  set: function (value) {
    //   const htmlString = value.content; // Extract the HTML string from the object
    //   return sanitizeHtml(htmlString); // Remove HTML tags from the HTML string
    // }},
    // description: { type: String, set: function (value) {
    //   const htmlString = value.content; // Extract the HTML string from the object
    //   return sanitizeHtml(htmlString); // Remove HTML tags from the HTML string
    // }},
      description:{
        type:{},
        required: true,
        min:6,
      }
      
     
},
{ timestamps: true });
// TopicSchema.pre('save', function (next) {
//   const sanitizedDescription = sanitizeHtml(this.description, {
//     allowedTags: ['h1'], // Allow no tags
//     allowedAttributes: {} // Allow no attributes
//   });
//   this.description = sanitizedDescription;
//   next();
// });
module.exports = mongoose.model("topics", TopicSchema);