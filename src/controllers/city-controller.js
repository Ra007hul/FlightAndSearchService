const { CityService }= require('../services/index');

const cityService= new CityService();

 //POST /city --> req.bosy
const create = async (req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message : 'successfully created a city',
            err : {}
        })
    } 
    catch (error) {
        console.log("error");
        return res.status(500).json({
            data:{},
            success: false,
            message: 'not able to create a city',
            err:error
        })
    }
}

//Delete Req -> /city/:id
const destroy = async (req,res)=>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message : 'successfully deleted a city',
            err : {}
        })
    } catch (error) {
        console.log("error");
        return res.status(500).json({
            data:{},
            success: false,
            message: 'not able to delete a city',
            err: error
        })

    }
}
//GET -> /city/:id
const get = async (req,res)=>{
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message : 'successfully fetched a city',
            err : {}
        })
    } 
    catch (error) {
        console.log("error")
        return res.status(500).json({
            data:{},
            success: false,
            message: 'not able to get a city',
            err:error
        })

    }
}
//patch /city/:id   --> req.body
const update = async (req,res)=>{
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message : 'successfully updated a city',
            err : {}
        })
    } 
    catch (error) {
        console.log("error")
        return res.status(500).json({
            data:{},
            success: false,
            message: 'not able to delete a city',
            err:error
        })

    }
}

const getAll= async (req , res)=>{
    try {
         const cities = await cityService.getAllCities(req.query);

          return res.status(200).json({
            data : cities ,
            success : true , 
            message : 'Successfully fetched all the citites'
          });

    } catch (error) {
        console.log("error")
        return res.status(500).json({
            data:{},
            success: false,
            message: 'not able to fetch the citites',
            err:error
        })
    }
}


module.exports={
    create,
    destroy,
    update,
    get,
    getAll
}