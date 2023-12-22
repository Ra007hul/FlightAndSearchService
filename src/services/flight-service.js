const {FlightRepository,AirplaneRepository}=require('../repository/index');
const { compareTime } = require('../utills/helper.js');

class FlightService{
    constructor(){
        this.airplaneRepository= new AirplaneRepository();
        this.flightRepository = new FlightRepository();

    }
    async createFlight(data){
        try {
            if(compareTime(data.arrivalTime , data.DepartureTime)){
             throw {error : 'Arrival time cannot be less than departure time'}
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data , totalSeats:airplane.capacity});
            return flight;

        } catch (error) {
            console.log("Something went wrong in the Service layer");
            throw {error}
        }
    }

    async getFlightData(){
        //todo
    }
}

module.exports=FlightService;

