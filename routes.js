var express = require("express");
var router = express.Router();
var Car = require("./models/carModel.js");


router.get("/", (req, res) => {
  res.sendFile("carlist.html");
})

router.get("/carListAll", (req, res) => {
  //Lista alla medlemmar
  var carList = [];
  Car.find({}, function(err, data){
    if (err)
      console.log(err);
    console.log(data);
        data.forEach(function(car) {
      carList.push(car)
        })
      res.render("carListAll.pug", {carList: carList});
})
  })
  

router.post("/carListAll", (req, data) => {
  
})

module.exports = router;

