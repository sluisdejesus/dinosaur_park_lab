const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function () {
    dinosaur1 = new Dinosaur("Tryceratops");
    park = new Park ("Jurassic Park", 30)
  })


  it('should have a name',function(){
    assert.deepStrictEqual(park.name, "Jurassic Park");
  });

  it('should have a ticket price', function(){
    assert.deepStrictEqual(park.ticket_price, 30);
  });

  it('should have a collection of dinosaurs',function(){
      assert.deepStrictEqual(park.dinosaurs, []);
  });

  it('should be able to add a dinosaur to its collection', function (){
      park.addDinosaur('Tryceratops');
      assert.deepStrictEqual(park.dinosaurs, ['Tryceratops'])
  });

  it('should be able to remove a dinosaur from its collection', function () {
      park.removeDinosaurByName('Tryceratops');
      assert.deepStrictEqual(park.dinosaurs, [])

  });


  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');
});









// ALL TAXI CODE

// const Taxi = function (manufacturer, model, driver) {
//   this.manufacturer = manufacturer;
//   this.model = model;
//   this.driver = driver;
//   this.passengers = [];
// }

// Taxi.prototype.numberOfPassengers = function () {
//   return this.passengers.length;
// }

// Taxi.prototype.addPassenger = function (passenger) {
//   this.passengers.push(passenger);
// }

// Taxi.prototype.removePassengerByName = function (passenger) {
//   const indexOfPassenger = this.passengers.indexOf(passenger);
//   this.passengers.splice(indexOfPassenger, 1);
// }

// Taxi.prototype.removeAllPassengers = function () {
//   this.passengers.splice(0, this.numberOfPassengers());
// }

// module.exports = Taxi;