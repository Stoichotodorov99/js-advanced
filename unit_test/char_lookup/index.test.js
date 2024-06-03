const  lookupChar  = require('./index.js');
const { assert } = require('chai');


describe('is the function with right string and index', ()=>{

    it('should return undefined if first parameter is not string', ()=> {
        assert.equal(lookupChar(35,2),undefined);
    })

    it('should return undefined if the second parameter is not a number', ()=> {
        assert.equal(lookupChar('ester','tru'), undefined);
    })

    it('should return incorrect index if the second parameter is with bigger value than string length', ()=>{
        assert.equal(lookupChar('ema', 4), "Incorrect index");
    } )

    it('should return incorrect index if the second parameter is with same value than string length', ()=>{
        assert.equal(lookupChar('ema', 3), "Incorrect index");
    } )

    it('should return character at the specified index if the both parameters are corect', ()=> {
        assert.equal(lookupChar('ema',1),'m');
    })
});
