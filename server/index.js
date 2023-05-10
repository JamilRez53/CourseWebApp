const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/userDetails")
const adminRoute = require("./routes/admin")
const adminInfo = require("./routes/adminInfo");
const topicInfo = require("./routes/topics");
const questionInfo = require("./routes/questions");
const tutorialInfo = require("./routes/tutorials");
const auth = require("./middleware/auth")
const cors=require("cors");
const path = require("path");

dotenv.config();
mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, },
    () => {
      console.log("Connected to MongoDB");
    }
  );
  //middleware
  
  app.use(cors());
  app.use(express.json());
  app.use(helmet());
  app.use(morgan("common"));
  //app.use("/api/users",userRoute);
  app.use("/auth/",authRoute);
  app.use("/userDetails/",userRoute);
  app.use("/admin/",adminRoute);
  app.use("/adminInfo/",adminInfo);
  app.use("/topics/",topicInfo);
  app.use("/questions/",questionInfo);
  app.use("/tutorials/",tutorialInfo);
  app.use("/public", express.static(path.join(__dirname, "public")));
  // app.get("/secret/",auth,(req,res)=>{
  //   res.sender("Secret");
  // });
  
app.listen(5000,()=>{
    console.log("Server running at port 5000");
})

