import assert from "assert";
import countRegNumber from "../js/countRegNumber.js";

describe('The countRegNumber function', function () {

    it('should returns the number of registration numbers in the string', function () {
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });

    it('should returns the number of registration numbers in the string', function () {
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });
});