const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("Connection Succussfuly");
  }).catch((err)=>{
    console.log("Not Connect")
    console.log(err)
  });