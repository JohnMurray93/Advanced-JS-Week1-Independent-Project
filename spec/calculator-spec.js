import { AgeCalculator, dateDifferenceInSeconds } from '../src/age-calculator.js';

describe('AgeCalculator', function() {
  var reusableAgeCalculator;

  beforeEach(function() {
    reusableAgeCalculator = new AgeCalculator(25, "March 3, 1993", 135);
  });
  
  it('should test that the AgeCalculator constructor works and accepts propper property types', function() {
    expect(reusableAgeCalculator.ageInYears).toEqual(25);
    expect(reusableAgeCalculator.ageInYears).not.toEqual("");
    expect(reusableAgeCalculator.birthday).toEqual("March 3, 1993");
    expect(reusableAgeCalculator.birthday).not.toEqual(1993);
    expect(reusableAgeCalculator.lifeExpectancy).toEqual(135);
    expect(reusableAgeCalculator.lifeExpectancy).not.toEqual("135");
  });

  it('should convert a persons age in years into seconds', function() {
    expect(reusableAgeCalculator.ageInYearsToSeconds()).not.toBe("");
    expect(reusableAgeCalculator.ageInYearsToSeconds()).toEqual(788400000);
  });

  it('should convert a persons birthday into age in seconds', function() {
    expect(reusableAgeCalculator.ageInSeconds()).not.toBe("");
    expect(reusableAgeCalculator.ageInSeconds()).toBeGreaterThanOrEqual(728726400);
  });

  it('should determine the difference in seconds between two dates', function() {
    let date1 = new Date(1999,1,1);
    let date2 = new Date(1999,1,2);
    let difference = dateDifferenceInSeconds(date1, date2);
    expect(difference).not.toBe("");
    expect(difference).toBeCloseTo(86400);
  });

  it('should return the users age on Mercury', function(){
    expect(reusableAgeCalculator.ageOnMercury()).not.toBe("");
    expect(reusableAgeCalculator.ageOnMercury()).toBeCloseTo(104.167);
  });

  it('should return the users age on Venus', function(){
    expect(reusableAgeCalculator.ageOnVenus()).not.toBe("");
    expect(reusableAgeCalculator.ageOnVenus()).toBeCloseTo(40.323);
  });

  it('should return the users age on Mars', function(){
    expect(reusableAgeCalculator.ageOnMars()).not.toBe("");
    expect(reusableAgeCalculator.ageOnMars()).toBeCloseTo(13.298);
  });


  it('should return the users age on Jupiter', function(){
    expect(reusableAgeCalculator.ageOnJupiter()).not.toBe("");
    expect(reusableAgeCalculator.ageOnJupiter()).toBeCloseTo(2.108);
  });

  it('should return the users remaining years to live on Mercury', function(){
    expect(reusableAgeCalculator.yearsLeftOnMercury()).not.toBe("");
    expect(reusableAgeCalculator.yearsLeftOnMercury()).toBeCloseTo(458.333);
  })

  it('should return the users remaining years to live on Venus', function(){
    expect(reusableAgeCalculator.yearsLeftOnVenus()).not.toBe("");
    expect(reusableAgeCalculator.yearsLeftOnVenus ()).toBeCloseTo(177.419);
  })

  it('should return the users remaining years to live on Mars', function(){
    expect(reusableAgeCalculator.yearsLeftOnMars()).not.toBe("");
    expect(reusableAgeCalculator.yearsLeftOnMars ()).toBeCloseTo(58.511);
  })

  it('should return the users remaining years to live on Jupiter', function(){
    expect(reusableAgeCalculator.yearsLeftOnJupiter()).not.toBe("");
    expect(reusableAgeCalculator.yearsLeftOnJupiter ()).toBeCloseTo(9.275);
  })
});