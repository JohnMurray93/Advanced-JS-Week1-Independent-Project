export class AgeCalculator {
  constructor(ageInYears, birthday, lifeExpectancy) {
    this.ageInYears = ageInYears;
    this.birthday = birthday;
    this.lifeExpectancy = lifeExpectancy;
  }

  yearsToSeconds() {
    return this.ageInYears * 31536000;
  }

  ageInSeconds() {
    let date = new Date(this.birthday);
    return date.getTime() / 1000;
  }
}

export function dateDifference(date1, date2) 
{
  var difference =(date1.getTime() - date2.getTime()) / 1000;
  return Math.abs(Math.round(difference));
}