const mongoose= require('mongoose');
const MONGO_URL='remove because of securit pupose';

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
