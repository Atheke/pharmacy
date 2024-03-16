const {
    checker,
  
}= require('../model/question.model');

function queryQustion(req,res){
    let t = req.body.systom;
    console.log(t);
    let m=req.session.store;
    
    console.log(req.session.store);
    
    
    let c;
    if(m){
        c = [...m,...t];
    }
    else{
        c=t;   
    }
    req.session.store=c;
    let b={};
    let ans;
    if(c[c.length-1]=='none'){
        b=checker(c);
        req.session.store='';
        return res.status(200).json(b);
    }
    if(c[c.length-1]==''){
        req.session.store='';
        return res.status(404).json('you selected nothing');
    }
    else{
    ans = checker(c);
    }
    if(ans.length==1){
        return  res.status(200).json(ans);
    }

    ans=Array.from(ans);
    console.log(ans);
    return res.status(200).json(ans);
    
}
module.exports = {
    queryQustion,
};