const express= require('express');
const { PORT}=require('./config/serverConfig');
const db = require('./models/index.js')
const bodyParser=require('body-parser');
const CityRepository = require('./repository/city-repository.js');


const setupAndStartServer=async ()=>{
  const app= express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  
  app.listen(PORT,()=>{
         console.log(`Server started at port ${PORT}`);
         const repo = new CityRepository();
         repo.createCity({name: "New Delhi"});
        
         
  });
}

setupAndStartServer();
