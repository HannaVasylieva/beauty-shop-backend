const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require("./BeautyRoutes");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);

const app = express();
const PORT = 4000 || process.env.port;

mongoose
  .connect(process.env.MONGODB_LINK)
  .then(() => console.log("We were connected to Mongo"))
  .catch((err) => console.log(err))

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(routes);

app.listen(PORT, () => {
  console.log("I'm listening port:4000")
})

//hannafrontend NNNFRy1M0bQvrlbu