interface Db {
  name: string;
  age: number;
}

interface InitFunc {
  (options: Db): string;
}

const func: InitFunc = function (db: Db) {
  return db.name;
}

const add = function (x: number, y: number): number {
  return x + y;
}

const add2 = (x, y): number => x + y;

// 默认值不用写默认类型
const add3 = function (x = 2, y: number): number {
  return x + y;
}

const add4 = function (x: number, ...y): void {
  console.log(x);
  console.log(y);
}

add4(1, 2, 3, 4, 5);