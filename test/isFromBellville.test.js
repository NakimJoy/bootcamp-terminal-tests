import assert from "assert";
import isFromBellville from "../js/isFromBellville.js"; 

describe('The isFromBellville function', function () {
    it('that returns true if a registration number is for Bellville otherwise returns false.Registration numbers for Bellville starts with CY', function () {
        assert.equal(isFromBellville('CY 123'), true);
assert.equal(isFromBellville('CJ 123'), false);

});
});