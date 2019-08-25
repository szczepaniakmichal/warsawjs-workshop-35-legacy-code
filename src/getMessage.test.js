const getMessage = require('./getMessage');

describe('getMessage', () => {
    describe('for number equal 101', function() {
        it('returns "number is greater than 100"', function() {
            expect(getMessage(101)).toEqual('number is greater than 100');
        });
    });

    describe('for number equal 99', function() {
        it('returns "number is NOT greater than 100"', function() {
            expect(getMessage(99)).toEqual('number is NOT greater than 100');
        });
    });

    test('getMessage (version 2)', function () {
        expect(getMessage(101)).toEqual('number is greater than 100');
        expect(getMessage(99)).toEqual('number is NOT greater than 100');
    })

});