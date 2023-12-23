const {FlightService} = require('../services/index');
const { SuccessCodes , ServerErrorCodes } = require('../utills/error-codes');

const flightService = new FlightService();

const create = async (req , res)=>{
    try {
        let flightRequestData= { 
            flightNumber  : req.body.flightNumber , 
            airplaneId :  req.body.airplaneId , 
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime : req.body.arrivalTime ,
            DepartureTime : req.body.DepartureTime,
            price : req.body.price
        }
        const response = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
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

 const getAll = async (req , res )=>{
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data: response ,
            success : true, 
            err : {},
            message: 'Successfully fetched the flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success:false,
            message: 'Not able to fetch the flights',
            err : error
        })
    }
 }

module.exports={
    create,
    getAll

}