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