const router = require("express").Router();
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
router.post("/adminData",async(req,res)=>{
    const { token } = req.body;
    try {
      const admin = jwt.verify(token, JWT_SECRET, (err, res) => {
        if (err) {
          return "token expired";
        }
        return res;
      });
      console.log(admin);
      if (admin == "token expired") {
        return res.send({ status: "error", data: "token expired" });
      }
  
      const adminemail = admin.email;
      Admin.findOne({ email: adminemail })
        .then((data) => {
          res.send({ status: "ok", data: data });
        })
        .catch((error) => {
          res.send({ status: "error", data: error });
        });
    } catch (error) {}
})


module.exports = router;