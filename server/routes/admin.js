const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = require("express").Router();


router.post("/register",async(req,res)=>{
  //create new pass
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password,salt);
  //create new admin
   const newAdmin = new Admin({
    email: req.body.email,
    password: hashedPass,
    secretKey: hashedPass
  });
  //save user and response
  try {
   const admin = await newAdmin.save();
   res.status(200).json(admin);
   return;
  } catch (err) {
   console.log(err)
  }
  
});

router.post("/login", async (req, res) => {
    const JWT_SECRET =
    "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
    try {
      const { email, password } = req.body;
  
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.json({ error: "Admin Not found" });
    }
      if (await bcrypt.compare(password, admin.password)) {
        const token = jwt.sign({ email: admin.email }, JWT_SECRET, {
          expiresIn: "24hrs",
        });
    
        if (res.status(201)) {
          return res.json({ status: "ok", data: token });
        } else {
          return res.json({ error: "error" });
        }
      }
      res.json({ status: "error", error: "InvAlid Password" });
      res.status(200).json(admin)
    
    } catch (err) {
      res.status(500).json(err)
    }
    
  });
  module.exports = router;