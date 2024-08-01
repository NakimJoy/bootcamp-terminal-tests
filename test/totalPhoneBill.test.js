import assert from "assert";
import totalPhoneBill from "../js/totalPhoneBill.js";

describe('The totalPhoneBill function', function(){

    it('should return a string calls made and sms sent. Calculate the total bill for the data provided', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
assert.equal('R3.40', totalPhoneBill('call, sms'));
assert.equal('R1.30', totalPhoneBill('sms, sms'));

 });
});