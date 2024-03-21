const mongoose= require('mongoose');//mongodb 
const MONGO_URL='mongodb+srv://med_data:y4vUvldi0irw2TZs@cluster0.46ygfrx.mongodb.net/cluster0?retryWrites=true&w=majority';
"mongodb+srv://nasa-api:5Iw7Yyg1f0Akb51U@nasacluster.bj9yge1.mongodb.net/?retryWrites=true&w=majority&appName=nasacluster"

// adding event listeners
mongoose.connection.once('open',()=>{
    console.log('mongodb connection ready');
});
mongoose.connection.on('error',(err)=>{ 
    console.error(err);
});
const options = {
    useNewUrlParser: true,
  };

async function mongoConnect() {
    mongoose.connect(MONGO_URL,options);
}

module.exports = {
    mongoConnect,
};