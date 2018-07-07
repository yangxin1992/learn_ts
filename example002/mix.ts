interface CounterIns {
  start: number;
}

interface Counter {
  (start: number): CounterIns;
  interval: number;
  reset(): void;
}

const getCounter = function (): Counter {
  const counter = <Counter>function (start: number) {
    this.start = start;
  };
  counter.interval = 100;
  counter.reset = function () {
    console.log('1212121');
  }
  return counter;
};

let c: Counter = getCounter();
c(10);
console.log(c.interval);
c.reset();
console.dir(c);
