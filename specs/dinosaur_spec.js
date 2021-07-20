const assert = require('assert');
const Dinosaur = require('../models/dinosaur.js');

describe('Dinosaur', function() {

  let dinosaur;

  beforeEach(function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
  });

  it('should have a species', function () {
    const actual = dinosaur.species;
    assert.strictEqual(actual, 't-rex');
  });

  it('should have a diet', function () {
    const actual = dinosaur.diet;
    assert.strictEqual(actual, 'carnivore');
  });

  it('should have an average number of visitors it attracts per day', function () {
    const actual = dinosaur.guestsAttractedPerDay;
    assert.strictEqual(actual, 50);
  });

});



// const assert = require('assert');

// // assert.equal(true, true);
// // assert.equal(true, false);
// // assert.equal(1, '1');
// // assert.equal([], ![]);

// // assert.strictEqual(1, '1');
// // assert.strictEqual([1, 2, 3], [1, 2, 3]);

// // const firstArray = [1, 2, 3];
// // const secondArray = firstArray;
// // assert.equal(firstArray, secondArray);

// // assert.deepEqual([1, 2, 3], [1, 2, 3]);
// // assert.deepEqual([1, 2, 3], ['1', '2', '3']);
// assert.deepStrictEqual([1, 2, 3], ['1', '2', '3']);
