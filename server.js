const express = require('express');
const app = express();
const cors = require('cors');
const port=3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://sandeepachathuminaonline:sandeepachathuminaonline@cluster0.vhitimk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log(error);
    }
}

connect();

const server = app.listen(3001, '127.0.0.1', () => (
    console.log(`Node server is listening to ${server.address().port}`)
));

app.use('/api',router);