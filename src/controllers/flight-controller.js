const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req , res)=>{
    try {
        const response = await flightService.createFlight(req.body);
        return res.status(200).json({
            data: response ,
            success : true, 
            err : {},
            message: 'Successfully created a flight'
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success:false,
            message: 'Not able to create flight',
            err : error
        })
    }
}

module.exports={
    create
}