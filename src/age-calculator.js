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
    date.getTime() / 1000;
  }
}