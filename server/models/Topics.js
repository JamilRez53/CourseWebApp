const mongoose = require("mongoose");
const sanitizeHtml = require('sanitize-html')
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
    description: { type: String, set: function (value) {
      const htmlString = value.content; // Extract the HTML string from the object
      return sanitizeHtml(htmlString); // Remove HTML tags from the HTML string
    }},
      
      
     
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