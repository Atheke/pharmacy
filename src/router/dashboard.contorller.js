const {
    allergies,
    // appointment,
    medication,
    history,
    info,
    // symtoms,
}= require('../model/dashboard.model');


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
    const data=await medication();
    return res.status(200).json(data);
}

async function GetAllHistory(req,res){
    const data= await history();
    return res.status(200).json(data);
}

async function GetAllinfo(req,res){
    const data=await info();
    return res.status(200).json(data);

}
// async function GetAllsymptoms(req,res){
//     const data=symtoms(req);
//     return res.status(201).json(data);
// }

module.exports ={
    getAllergies,
    // getAppointment,
    getMedication,
    GetAllHistory,
    GetAllinfo,
    // GetAllsymptoms,
};
