import assert from "assert";
import fromWhere from "../js/fromWhere.js";

describe('The fromWhere function', function(){

    it('should returns the town the car is from', function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
assert.equal(fromWhere('CJ 343502'), 'Paarl');
assert.equal(fromWhere('CA 987504'), 'Cape Town');
assert.equal(fromWhere('ZN 568593'), 'Some other place!');

   });
});