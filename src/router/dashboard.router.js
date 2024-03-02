const express = require('express');
const path = require('path');
const app = express();


const {
    getAllergies,
    // getAppointment,
    // getMedication,
    // GetAllHistory,
    // GetAllinfo,
    // GetAllsymptoms,

}= require('./dashboard.contorller');
app.use(express.static(path.join(__dirname,'..','public','dashboard')));

const dashboardRouter=express.Router();
dashboardRouter.get(('/'),(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','dashboard','dashboard.html'));
  });

dashboardRouter.get('/allergies', getAllergies);
// dashboardRouter.get('/appointment', getAppointment);
// dashboardRouter.get('/currentMedication', getMedication);
// dashboardRouter.get('/patientHistory', GetAllHistory);
// dashboardRouter.get('/healthInfo',GetAllinfo);
// dashboardRouter.post('/symptoms', GetAllsymptoms);



module.exports ={
    dashboardRouter,
};
