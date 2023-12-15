const express = require("express");
require("../src/db/connection")
const router = require("./routers/movies");

const app = express();
const port = process.env.PORT || 3000;


//Middleware 
app.use(express.json());

//Router
app.use(router); 

app.listen(port, () =>{
    console.log(`sever is runing on port no. ${port}`);
});