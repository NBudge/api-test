const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to my Nathanael's backend application");
});

app.get("/nathanael",(req,res)=>{
    res.send("Hello Nathanael!");
});

app.listen(3000,()=>{
    console.log(listening);
})