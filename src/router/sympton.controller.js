const {
    checker,
  
}= require('../model/question.model');

function queryQustion(req,res){
    let fullSym;let allDes={};let moresym;
    let newsym = req.body.symptoms;
    console.log(newsym);
    let patientsym=req.session.store;
    console.log(req.session.store);
    if(patientsym){
        fullSym = [...patientsym,...newsym];
    }
    else{
        fullSym=newsym;   
    }

    req.session.store=fullSym;

    if(fullSym[fullSym.length-1]=='none'){
        allDes=checker(fullSym);
        req.session.store='';
        return res.status(200).json(allDes);
    }

    if(fullSym[fullSym.length-1]==''){
        req.session.store='';
        return res.status(404).json('you selected nothing');
    }
    else{
    moresym = checker(fullSym);
    }
    // if(moresym.length==1){
    //     return  res.status(200).json(moresym);
    // }if only one symtom desase is inside my filter

    moresym=Array.from(moresym);
    console.log(moresym);
    return res.status(200).json(moresym);
    
}
module.exports = {
    queryQustion,
};