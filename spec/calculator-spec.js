import { Calculator } from '../src/age-calculator.js';

describe('Calculator', function() {
  var reusableCalculator;

  beforeEach(function() {
    reusableCalculator = new Calculator(1993, 135);
  });
  
  it('should test that the Calculator constructor works', function() {
    expect(reusableCalculator.birthday).toEqual(1993);
    expect(reusableCalculator.lifeExpectancy).toEqual(135);
  });
});