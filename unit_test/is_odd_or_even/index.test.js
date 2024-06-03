const  isOddOrEven  = require('./index.js');
const { assert } = require('chai');


describe('sumOfTwoNumbers function test', ()=>{

    it('should return undefined if parameter is number', ()=> {
        assert.equal(isOddOrEven(5),undefined);


    })

    it('should return undefined if parameter is object', ()=> {
        assert.equal(isOddOrEven({}),undefined);
    });

    it('should return undefined if parameter is array', ()=> {
        assert.equal(isOddOrEven([]),undefined);
    });


    it('should return even as result', ()=> {
        assert.equal(isOddOrEven('Hi'),'even');
    })

    it('should return odd as result', ()=> {
        assert.equal(isOddOrEven('its'),'odd');
    })

    it('should return undefined if the parameter is undefined', ()=> {
        assert.equal(isOddOrEven(undefined),undefined);
    })

    it('should return undefined if the parameter is null', ()=> {
        assert.equal(isOddOrEven(null),undefined);
    })

});