import { Calculator } from '../src/age-calculator.js';

describe('Calculator', function() {
  var reusableCalculator;

  beforeEach(function() {
    reusableCalculator = new Calculator((2013, 1, 1), 95);
  });
  
  it('should test that the Calculator constructor works', function() {
    expect(reusableCalculator.birthday).toEqual((2013, 1, 1));
    expect(reusableCalculator.lifeExpectancy).toEqual(95);
  });
});