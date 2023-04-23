const User = require("../db/models/userModel");
const Baby = require("../db/models/babyModel");
const Mother = require("../db/models/motherModel");
// const { response } = require("express");
const twilio = require("twilio");

module.exports = {
  async getUser(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findById({ _id: id });

      if (user) {
        res.send(user);
      }
    } catch (err) {
      console.log(err);
    }
  },
  async postDetails(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            detailsOne: {
              age: req.body.user.age,
              expecteddate: req.body.user.expecteddate,
              childnumber: req.body.user.childnumber,
              currentweek: parseInt(req.body.user.currentweek),
              selectedFood: req.body.selectedFood,
              createdTime: Date.now(),
            },
            detailsFlag: true,
          },
        }
      );

      res.send({ message: "true", verified: user.detailsFlag });
    } catch (err) {
      console.log(err);
    }
  },
  async motherChildInfo(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findById({ _id: id });

      let days = (
        (Date.now() - user.detailsOne.createdTime) /
        (1000 * 60 * 60 * 24)
      ).toFixed(1);

      let week = Math.floor(days / 7);

      let currentweek = user.detailsOne.currentweek + week;

      const baby = await Baby.findOne({ week: currentweek });

      let motherChild = [];

      motherChild.push(baby);

      res.send({ info: motherChild });
    } catch (err) {
      console.log(err);
    }
  },
  async motherFood(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findById({ _id: id });

      let days = (
        (Date.now() - user.detailsOne.createdTime) /
        (1000 * 60 * 60 * 24)
      ).toFixed(1);

      let week = Math.floor(days / 7);

      let currentweek = user.detailsOne.currentweek + week;

      const motherfood = await Mother.findOne({ week: currentweek });

      res.send(motherfood);
    } catch (err) {
      console.log(err);
    }
  },
  async babyChanges(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findById({ _id: id });

      let days = (
        (Date.now() - user.detailsOne.createdTime) /
        (1000 * 60 * 60 * 24)
      ).toFixed(1);

      let week = Math.floor(days / 7);

      let currentweek = user.detailsOne.currentweek + week;

      const babychanges = await Baby.findOne({ week: currentweek });

      res.send(babychanges);
    } catch (err) {
      console.log(err);
    }
  },
  async call(req, res) {

    console.log("In call");
    const accountSid = "AC4609afa426878374c38ff4a9527b4138";
    const authToken = "81c9a07a54522f65c839e97c16dbeb8c";
    const client = require("twilio")(accountSid, authToken);

    client.calls.create({
      url: "http://demo.twilio.com/docs/voice.xml",
      to: "+919717185450",
      from: "+13392183223"
    })
      .then(call => console.log(call.sid))
      .catch((err) => console.log("Call Error" + err));
  },
  async recommendFood(req , res){
     try{
        axios.get("http://localhost:8000/recommend/food",{
          diabeties : 0
        }).then((data)=>{
            console.log(data) ;
        })
     }catch(err){
      console.log(err) ;
     }
  }
};
