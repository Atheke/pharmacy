const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const {checkUser} = require('./service/authentication');

const {createUser} = require('./model/createuser');

const {dashboardRouter} = require('./router/dashboard.router');

// const {loginroter} = require('./router/login.router');

const app = express();

// const myMiddleware = function(req, res, next) {
//   console.log('Middleware is executing...');

//   next();
// };

// the middleqare;
app.use(bodyParser.json());
app.use(morgan('combined'));// give the logs;

app.use(express.json());// parse the req.body to json

app.use(express.static(path.join(__dirname,'public','signin')));

app.use(express.static(path.join(__dirname,'public')));

//app.use()

app.post('/login',async(req,res)=>{
  const statu = await checkUser(req);
  console.log(statu);
  
  if(statu===false){
    return res.status(404).json({message:'that the the longin falide user doesnot exit'});
  }
  else{
    return res.status(200).json({
      no:'200',
      userId: 'll',
    });
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





app.use('/dashboard',dashboardRouter);


app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','signin'));
});




module.exports = app;

