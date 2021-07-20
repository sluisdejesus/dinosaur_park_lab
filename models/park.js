const Park = function (name, ticket_price){
    this.name = name
    this.ticket_price = ticket_price
    this.dinosaurs = []

}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur)
  }

Park.prototype.removeDinosaurByName = function(dinosaur){
    const indexOfDinosaurs = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaurs,1);
};

module.exports = Park;







// TAXI EXAMPLES

// const Taxi = function (manufacturer, model, driver) {
//     this.manufacturer = manufacturer;
//     this.model = model;
//     this.driver = driver;
//     this.passengers = [];
//   }
  
//   Taxi.prototype.numberOfPassengers = function () {
//     return this.passengers.length;
//   }
  
//   Taxi.prototype.addPassenger = function (passenger) {
//     this.passengers.push(passenger);
//   }
  
//   Taxi.prototype.removePassengerByName = function (passenger) {
//     const indexOfPassenger = this.passengers.indexOf(passenger);
//     this.passengers.splice(indexOfPassenger, 1);
//   }
  
//   Taxi.prototype.removeAllPassengers = function () {
//     this.passengers.splice(0, this.numberOfPassengers());
//   }
  
//   module.exports = Taxi;
  