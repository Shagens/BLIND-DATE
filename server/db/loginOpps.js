const User = require("./schema/userSchema");
const jwt = require("jsonwebtoken");
const { response } = require("express");
const loginOpps = {
  fetchUser(userObj, req, res) {
    // console.log('userObj received at fetchUser function', userObj);

    User.find(
      { email: userObj.email, password: userObj.password },
      (err, content) => {
        // console.log('making login query');
        if (err) {
          // console.log('inside')
          response.json({
            status: 404,
            responseText: "Login error occured",
          });
        } else if (content && content.length > 0) {
          //   console.log("inside else if");
          let token = jwt.sign({ email: userObj.email }, "secretkey", {
            expiresIn: "300s",
          });
          //   console.log("token made is", token);
          response.json({
            content,
            token,
          });
        } else {
          //   console.log("inside else");
          response.json({
            status: 404,
            responseText: "Login error occured",
          });
        }
      }
    );
  },

  registerUser: function (userObj, req, res) {
    // console.log("register userObj", userObj);
    let user = new User({
      name: userObj.name,
      gender: userObj.gender,
      email: userObj.email,
      password: userObj.password,
      profilepic_url: userObj.url,
    });
    // console.log("creating user for saving");
    user.save((err) => {
      //   console.log("saving user");
      if (err) {
        response.json({
          status: 404,
          responseText: "could not register user",
        });
      } else {
        response.json({
          status: 200,
          responseText: "successfully registered user...",
        });
      }
    });
  },
};

module.exports = loginOpps;
