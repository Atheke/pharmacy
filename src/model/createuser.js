const userCreatedb= require('./createuser.mongo');
const {checkUser} = require('../service/authentication');



async function createUser(req){
    const userData=req.body; 
    console.log(userData);
    const permissions = await checkUser(req);

try{

    if(!permissions){
    await userCreatedb.updateOne({
        email: userData.email,
    },userData,{
        upsert: true,
    });

    console.log(userData);

    return true;
}
else{
    return false;
}
}
catch(err){
    console.error('could not insert the user data');
}

}

module.exports ={ 
    createUser,
 };
