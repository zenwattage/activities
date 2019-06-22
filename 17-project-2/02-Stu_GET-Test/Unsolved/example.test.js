var expect = require('chai').expect;



// Write tests for the calculateTax function here
describe('calculateTax', function(){
  it('should return 8 percent tax', function() {
    expect(calculateTax(4)).to.equal(4.32);
  });

  it('should be an integer', () => {
    var functionCall = function() {
      calculateTax('1234');
    };

    expect(functionCall).to.throw(Error, "param 'price' must be a number");
  });
});