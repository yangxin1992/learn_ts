// 扩展类

import { Observable } from "./ob";

declare module "./ob" {
  interface Observable<U> {
    map<T>(f: (x: U, y: U) => T): Observable<U>;
  }
}

Observable.prototype.map = function (f) {
  let rets = f(10, 20);
  return new Observable<typeof rets>();
}

const o: Observable<number> = new Observable();
const newValue = o.map<number>((x) => Number(x.toFixed()));
newValue.map