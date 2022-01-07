const mongoose = require("../connect/connection");
const schema = mongoose.Schema;

var userSchema = new schema({
  name: String,
  gender: String,
  profilepic_url: String,
  password: String,
  email: String,
  rejected: [String],
  liked: [String],
  superheart: [String],
});

var userModel = mongoose.model("users", userSchema);
module.exports = userModel;
