import { AgeCalculator, dateDifference } from '../src/age-calculator.js';

describe('AgeCalculator', function() {
  var reusableAgeCalculator;

  beforeEach(function() {
    reusableAgeCalculator = new AgeCalculator(25, "1993,2,3", 135);
  });
  
  it('should test that the AgeCalculator constructor works and accepts propper property types', function() {
    expect(reusableAgeCalculator.ageInYears).toEqual(25);
    expect(reusableAgeCalculator.ageInYears).not.toEqual("");
    expect(reusableAgeCalculator.birthday).toEqual("1993,2,3");
    expect(reusableAgeCalculator.birthday).not.toEqual(1993,2,3);
    expect(reusableAgeCalculator.lifeExpectancy).toEqual(135);
    expect(reusableAgeCalculator.lifeExpectancy).not.toEqual("135");
  });

  it('should convert a persons age in years into seconds', function() {
    expect(reusableAgeCalculator.yearsToSeconds()).not.toBe("");
    expect(reusableAgeCalculator.yearsToSeconds()).toEqual(788400000);
  });

  it('should convert a persons birthday into age in seconds', function() {
    expect(reusableAgeCalculator.ageInSeconds()).not.toBe("");
    expect(reusableAgeCalculator.ageInSeconds()).toBeGreaterThanOrEqual(728726400);
  });

  it('should determine the difference in seconds between two dates', function() {
    let date1 = new Date(1999,1,1);
    let date2 = new Date(1999,1,2);
    let difference = dateDifference(date1, date2);
    expect(difference).not.toBe("");
    expect(difference).toBeCloseTo(86400);
  });
});