const { response } = require("express");
const Users = require("./schema/userSchema");
var userOpps = {
  likeUser: function (userObj, cb) {
    let targetEmail = userObj.targetEmail;
    let email = userObj.email;

    Users.findOneAndUpdate(
      { email: email },
      { $push: { liked: targetEmail } },
      (err, content) => {
        if (err) {
          console.log("error occured");
        } else {
          console.log("Perfomed Successfully");
          cb();
        }
      }
    );
  },
  rejectUser: function (userObj, cb) {
    let targetEmail = userObj.targetEmail;
    let email = userObj.email;

    Users.findOneAndUpdate(
      { email: email },
      { $push: { rejected: targetEmail } },
      (err, content) => {
        if (err) {
          console.log("error occured");
        } else {
          console.log("Performed Successfully");
          cb();
        }
      }
    );
  },

  superheartUser: function (userObj, cb) {
    let targetEmail = userObj.targetEmail;
    let email = userObj.email;

    Users.findOneAndUpdate(
      { email: email },
      { $push: { superheart: targetEmail } },
      (err, content) => {
        if (err) {
          console.log("error occured");
        } else {
          console.log(" Performed Successfully..");
          cb(content);
        }
      }
    );
  },

  retUsers: function (req, res) {
    Users.find({}, (err, content) => {
      if (err) {
        console.log("User could not be found");
        response.json({
          status: 200,
          content: content,
        });
      } else {
        console.log("Errors were found");
        response.json({
          status: 404,
          responseText: "Errors were found",
        });
      }
    });
  },
};

module.exports = userOpps;
