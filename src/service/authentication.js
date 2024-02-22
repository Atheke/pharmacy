const userDb= require('../model/createuser.mongo');


async function checkUser(req){
    const user = {
        email:req.body.email,
        password:req.body.password,
    }
    console.log(user);

    const t=await userDb.findOne({
            email:user.email,
    })
    console.log(t);
    if(t!=null) {
        if(t.password===user.password)
        return true;
    }
    else {
         return false;
    }
}    


module.exports = {
    checkUser,
};