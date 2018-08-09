export class AgeCalculator {
  constructor(ageInYears, birthday = new Date(), lifeExpectancy) {
    this.ageInYears = ageInYears;
    this.birthday = birthday;
    this.lifeExpectancy = lifeExpectancy;
  }

  ageInYearsToSeconds() {
    return this.ageInYears * 31536000;
  }

  ageInSeconds() {
    let birthday = new Date(this.birthday);
    return birthday.getTime() / 1000;
  }

  ageOnMercury() {
    return getAge(this.birthday) / .24;
  }

  ageOnVenus() {
    return getAge(this.birthday) / .62;
  }
}

export function dateDifferenceInSeconds(date1, date2) {
  let difference =(date1.getTime() - date2.getTime()) / 1000;
  return Math.abs(Math.round(difference));
}

export function getAge(dateString) {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}