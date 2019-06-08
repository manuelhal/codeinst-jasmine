//*** spec/calcSpec.js

describe('Calculator', function() {

    //create an instance of Calculator obj before each test
    beforeEach(function() {
        calc = new Calculator;
    });


    describe('Addition function', function() {
        it('should return 42', function() {
            // expect(addition(20,22)).toBe(42);
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it('should return 25', function() {
            // expect(addition(20,5)).toBe(25);
            calc.add(20);
            calc.add(5);
            expect(calc.value).toBe(25);
        });
        // it('should return an ERROR if user dont supply 2 numbers', function(){
        //     expect(addition('one', 'two')).toBe('ERROR!!!');
        // })

        //use spyOn on window.alert() event 
        it('should return an ERROR if user dont supply 2 numbers', function() {
            spyOn(window, 'alert');
            // addition('one', 'two');
            // expect(window.alert).toHaveBeenCalledWith('ERROR!');
            calc.add('one');
            expect(window.alert).toHaveBeenCalledWith('ERROR!');
        })
    });
})
