interface MyDateInit {
  new (year: string, month: string, day: string): MyDate;
}

interface MyDate {
  year: string;
  month: string;
  day: string;
}

class DateClass implements MyDate {
  year: string;
  month: string;
  day: string;
  constructor (year: string, month: string, day: string) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

function getDate (Clazz: MyDateInit, { year, month, day }): MyDate {
  return new Clazz(year, month, day);
}

getDate(DateClass, { year: '1970', month: '1', day: '1' });

const successExample: MyDateInit = DateClass;

// other
let other: MyDateInit = class SomeData implements MyDate {
  year: string;
  month: string;
  day: string;
  constructor (year: string, month: string, day: string) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}