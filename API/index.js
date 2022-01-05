const express = require("express");
const mongoose = require("express");
//App Config
const app = express();
const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Listening on localhost: ${port}`));
