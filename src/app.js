const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const {checkUser} = require('./service/authentication');

const {createUser} = require('./model/createuser');

// const {loginroter} = require('./router/login.router');

const app = express();


// the middleqare;
app.use(bodyParser.json());
app.use(morgan('combined'));// give the logs;

app.use(express.json());// parse the req.body to json

app.use(express.static(path.join(__dirname,'public','signin')));
app.use(express.static(path.join(__dirname,'public','dashboard')));

app.post('/login',async(req,res)=>{
  const statu = await checkUser(req);
  console.log(statu);
  
  if(!statu){
    return res.status(404).json({message:'that the the longin falide user doesnot exit'});
  }
  else{
    return res.status(200).json({no:'200'});
  }
});


app.post('/create',async(req,res)=>{

  const answer= await createUser(req);
  

  if(answer){
    res.status(200).json({no:'200'});
  }
  else{
    res.status(404).json({message:'that the longin falide'});
  }
});



app.get(('/dashboard'),(req,res)=>{
  res.sendFile(path.join(__dirname,'public','dashboard','dashboard.html'));
});


app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','signin'));
});




module.exports = app;

