import assert from "assert";
import transportFee from "../js/transportFee.js";

describe('The transportFee function', function(){

    it('should returns the right price based on the shift you are working. If you are working morning shift the transport cost is R20, afternoon shift is R10 as your work provides transport back home.', function(){
        assert.equal(transportFee('morning'), 'R20');

        assert.equal(transportFee('afternoon'), 'R10');
        
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
        
        });
});