var assert    = require("chai").assert;
var expect    = require("chai").expect;
var bubbleSort = require("../app/bubbleSort.js");


describe("Bubble Sort", function(){
  it ("should return sorted array", function(){
    var array = [4,3,1,2];
    assert.deepEqual(array,[4,3,1,2]);
    expect(array).to.deep.equal([4,3,1,2]); //same test as above just written differently
    assert.deepEqual(bubbleSort(array),[1,2,3,4]);
  });
});
