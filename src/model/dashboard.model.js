const userDataBase= require('./createuser.mongo');
async function allergies(req) {

   const user = 'manav@gamil.com';
   console.log(user);
   const data = await userDataBase.findOne({
        email:user,
   });
   const answer = data.dashboard.allergers;
   console.log(answer);
   return answer;
}
// async function appointment(req) {

//     const user = req.body.email;
//     const data= await userDataBase.findOne({
//          email:user,
//     });
//     const answer = data.dashboard.allergies;
//     return answer;
//  }
//  async function medication(req) {

//     const user = req.body.email;
//     const data= await userDataBase.findOne({
//          email:user,
//     });
//     const answer = data.dashboard.allergies;
//     return answer;
//  }
//  async function history(req) {

//     const user = req.body.email;
//     const data= await userDataBase.findOne({
//          email:user,
//     });
//     const answer = data.dashboard.allergies;
//     return answer;
//  }

//  async function info(req) {

//     const user = req.body.email;
//     const data= await userDataBase.findOne({
//          email:user,
//     });
//     const answer = data.dashboard.allergies;
//     return answer;
//  }
//  async function symptoms(req) {

//     const user = req.body.email;
//     const data= await userDataBase.findOne({
//          email:user,
//     });
//     const answer = data.dashboard.allergies;
//     return answer;
//  }
module.exports ={
    allergies,
    // appointment,
    // medication,
    // history,
    // info,
    // symtoms,
}