const express= require('express');
const { PORT }=require('./config/serverConfig');
const db = require('./models/index.js')
const bodyParser=require('body-parser');

const Apiroutes= require('./routes/index.js');


const setupAndStartServer=async ()=>{
  const app= express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  app.use('/api', Apiroutes);
  
  app.listen(PORT, async ()=>{
         console.log(`Server started at port ${PORT}`);
        
        
         
  });
}

setupAndStartServer();
