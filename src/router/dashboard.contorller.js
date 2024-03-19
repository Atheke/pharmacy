const {
    allergies,
    // appointment,
    medication,
    history,
    info,
    // symtoms,
    userName,
}= require('../model/dashboard.model');

const {
    deleteit,
    updatethedata,
}= require('../service/addordelete');


async function getAllergies(req,res){
    // i can put a login checker here to know that the user is logged in

    console.log('it workinh');
    const data= await allergies(req);
    return res.status(200).json(data);
}

// async function getAppointment(req,res){
//     const data=appointment();
//     return res.status(200).json(data);
// }

async function getMedication(req,res){
    const data=await medication(req);
    return res.status(200).json(data);
}

async function GetAllHistory(req,res){
    const data= await history(req);
    return res.status(200).json(data);
}

async function GetAllinfo(req,res){
    const data=await info(req);
    return res.status(200).json(data);

}
// async function GetAllsymptoms(req,res){
//     const data=symtoms(req);
//     return res.status(201).json(data);
// }
async function username(req,res){
    const data=await userName(req);
    console.log("ther user name data ",data);
    return res.status(200).json(data);
}
async function updateitm(req,res){
    const endpoint='currentMedication';
    await updatethedata(req,endpoint);
    return res.status(201).json('updadtordeletsucess');
}
async function deleteitm(req,res){
    const endpoint='currentMedication';
    await deleteit(req,endpoint);
    return res.status(201).json('updadtordeletsucess');
}
async function updateita(req,res){
    const endpoint='allergers';
    await updatethedata(req,endpoint);
    return res.status(201).json('updadtordeletsucess');
}
async function deleteita(req,res){
    const endpoint='allergers';
    await deleteit (req,endpoint);
    return res.status(201).json('updadtordeletsucess');
}
async function updateitp(req,res){
    const endpoint='patientHistory';
    await updatethedata(req,endpoint);
    return res.status(201).json('updadtordeletsucess');
}
async function deleteitp(req,res){
    const endpoint='patientHistory';
    await updatethedata(req,endpoint);
    return res.status(201).json('updadtordeletsucess');
}
module.exports ={
    getAllergies,
    // getAppointment,
    getMedication,
    GetAllHistory,
    GetAllinfo,
    // GetAllsymptoms,
    username,
     updateitm,
     deleteitm,
     updateita,
     deleteita,
     updateitp,
     deleteitp,
};
