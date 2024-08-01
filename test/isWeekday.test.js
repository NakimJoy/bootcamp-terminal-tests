import assert from "assert";
import isWeekday from "../js/isWeekday.js";

describe('The isWeekday function', function(){

    it('should find out if the parameter passed in is a day of the week (ie. Not a weekend day).', function(){
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Sunday'), false);
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);
    });
});