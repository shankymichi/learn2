
const chai =require('chai')
const {student} = require('../src/js/classes.js')
const expect = chai.expect


describe('Testing for student class' , function(){
    it('Creating object of student class' ,  function(){
        try {
            let obj = new student('Welcome')
           

        } catch (error) {
            fail()
            
        }
    })

    it('Checking object of student class' ,  function(){
        try {
            let obj = new student('Welcome2')
            let actual = obj.display();
            expect(actual).to.equal('Welcome2');

        } catch (error) {
            fail()
            
        }
    })
})
