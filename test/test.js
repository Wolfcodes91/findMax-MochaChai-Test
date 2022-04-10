const chai = require('chai');
const { it } = require('mocha');
const assert = chai.assert;
const findMax = require('../findMax');

describe("the findMax function", ()=>{
    it("should be defined as a function", ()=>{
        assert.exists(findMax, "findMax exists");
        assert.isFunction(findMax, "findMax is a function");
    });
    it("should return the correct maximum", ()=>{
        assert.equal(findMax([1,3,2]), 3);
        assert.equal(findMax([-1,-2,-3]), -1);
    })
    it("should not return a string", ()=> {
        assert.isNotString(findMax([1, 3, 2]), "not a string")
    })
    it("should not return NaN", ()=> {
        assert.isNotNaN(findMax([1, 3, 2]), "not NaN")
    })
    it("should not return an Array", ()=> {
        assert.isNotArray(findMax([1, 3, 2]), "not an Array")
    })
});

