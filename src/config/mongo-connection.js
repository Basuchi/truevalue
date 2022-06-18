const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
//connect with DB
const MONGODB_URI = process.env.MONGODB_URI ;//'mongodb://127.0.0.1:27017/node-mongo'
mongoose.connect(MONGODB_URI);
mongoose.connection.once('open',()=>{
    console.log("Connection has made");
}).on('error',(error)=>{
    console.log('Error in connection: ',error);
});