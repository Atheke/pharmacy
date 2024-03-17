
const fs = require('fs');
const jsonString = fs.readFileSync('data.txt', 'utf-8');
const data = JSON.parse(jsonString);

let nextfilter =new Set();
let filter = {};

function findDeease(patientSym){
    for(Des in data){
        let count =0;
          for(sym in patientSym){
               data[Des].forEach((desSym,index)=>{
                   const temp1=desSym.toLowerCase();
                   const temp2=patientSym[sym].toLowerCase();
                   if(temp1.includes(temp2)||temp2=='none'){
                        count++;
                   }
                }); 
                const comp=(count/patientSym.length)*100;
                console.log(comp);
                if(comp>70){
                     filter[Des]=data[Des];
                    console.log((data[Des] ,count/patientSym.length)*100);
                }
           }
    }

        
      console.log(filter);  
      if(patientSym[patientSym.length-1]=='none'){
         return filter; 
      }
      if(Object.entries(filter).length === 1){
            return  Object.values(filter);
      }   
      return (nextLayer(filter,patientSym));
    }
    

    
function nextLayer(filter,t){
    nextfilter.clear();
    for(i in filter){
        filter[i].forEach(k => {
        if(!t.includes(k)){
             nextfilter.add(k);
            }
        });
    }
    return nextfilter;
}



function checker (req) {
    const systom = req;
    console.log(systom);
    //console.log(t);
    let ans=findDeease(systom);
    return ans;
}


module.exports = {
    checker,
};

