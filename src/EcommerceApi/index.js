const express = require("express");
const app = express();
const mongoose = require("mongoose")

 mongoose.connect("mongodb+srv://Devon:Devon@cluster0.ql2dejm.mongodb.net/shop?retryWrites=true&w=majority"
 ).then(() => console.log("DBConnection Successful"))
 .catch((err) => {
     console.log(err)
  });

app.listen(500, ()=>{
    console.log("Backend server is running!");
});