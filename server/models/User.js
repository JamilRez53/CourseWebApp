const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fname:{
        type: String,
        require: true,
        max: 50,
        unique: true
    },
    lname:{
        type: String,
        require: true,
        max: 50,
        unique: true
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        min: 6,
      },
      
      
     
},
{ timestamps: true });
module.exports = mongoose.model("User", UserSchema);