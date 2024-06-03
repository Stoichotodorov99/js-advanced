const  mathEnforcer  = require('./index.js');
const { assert } = require('chai');


describe('mathEnforcer function tests', ()=>{


    describe('add five function tests', ()=>{
        
        it('should return undefined with string', ()=> {
            assert.equal(mathEnforcer.addFive('TEST'), undefined);
        })

        it('return the parameter plus five if the parameter is number', ()=> {
            assert.equal(mathEnforcer.addFive(10), 15);
        })
    });

    describe('subtract ten function tests', ()=>{

    
        it('should return undefined if the parameter is not a number', ()=> {
            assert.equal(mathEnforcer.subtractTen('10'), undefined);
        })
            
        it('positive integer return result with subtractTen', ()=> {
            assert.equal(mathEnforcer.subtractTen(10), 0);
        })

    });

    describe('sum of two numbers function tests', ()=>{

    

    });

});