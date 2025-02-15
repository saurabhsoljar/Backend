require('dotenv').config()
const express = require("express");
const app = express();
const port = 4002;  

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Saurabh__567");
});

app.get("/facebook",(req,res) =>{
  res.send("saurabh kushwasha")
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${port}`);
});