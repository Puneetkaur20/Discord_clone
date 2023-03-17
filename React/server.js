const express =require('express');
const cors =require('cors');
const http =require('http');
const mongoose= require('mongoose');
require("dotenv").config();

const authRoutes=require('./routes/authRoutes');
const { randomFill } = require('crypto');

const PORT=process.env.PORT || process.env.API_PORT;
const app=express();
app.use(express.json());
app.use(cors());
//register routes
app.use('/api/auth',authRoutes);

const server = http.createServer(app);

mongoose.connect(process.env.MONGO_URI).then(function(){
    server.listen(PORT,function(){
        console.log('Server is connected to Database and running at ',{PORT})
    });
    
})
.catch(function (err){
    console.log('database connection failed , server not started');
    console.log(err);
})
