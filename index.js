const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const bodyParser=require("body-parser"); 
  

const User = require('./model/usermodel');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
app.use(express.static('client'))
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname + '/client/index.html'))
// })

app.post('/contact',(req,res)=>{
   // console.log ("body ")
    //console.log(req)
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
      });
   
      user
        .save()
        .then((result) => {
       
            res.sendFile(path.join(__dirname + '/client/thankyou.html'))
          
        })
        .catch(err => {
          res.status(400).send("err");
        });
})

mongoose

    .connect('mongodb+srv://supraja:5XcFCkh0Rg3r8ZZO@cluster0.0m987.mongodb.net/cluster0?retryWrites=true&w=majority', {
        useNewUrlParser: true,useUnifiedTopology: true
    })
    .then(() => {
        console.log ('database connected')
        const port=process.env.PORT||'5000'
        app.listen(port, console.log(`Server started at on${port}`));
    })
    .catch(err => console.log(err));