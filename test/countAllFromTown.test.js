import assert from "assert";
import countAllFromTown from "../js/countAllFromTown.js";  // Correct import statement

describe('The countAllFromTown function', function () {

    it('should return the number of registration numbers in the string that is for that town', function () {
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
        assert.equal(fromStellies, 3);
    });

    it('should countAllFromTown correctly', function () {
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF');
        assert.equal(fromKuilsriver, 1);
    });
});