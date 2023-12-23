const { ClientErrorCodes } = require('../utills/error-codes');

const validateCreateFlight = (req,res,next )=>{
      if(
        !req.body.flightNumber ||
        !req.body.airplaneId || 
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.DepartureTime ||
        !req.body.price 
      ){
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data : {},
            success  : false , 
            message : "Invalid body request to create a flight",
            error : "Missing mandatory properties to create a flight"
        })
      }
      next()
}

module.exports={
    validateCreateFlight
}