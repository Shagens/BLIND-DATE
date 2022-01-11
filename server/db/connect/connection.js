const mongoose = require("mongoose");
const config = require("../common/config");
mongoose.connect(config.dbUrl, { useNewUrlParser: true }, () => {
  console.log("successfully connected to the database");
});

module.exports = mongoose;
