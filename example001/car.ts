interface Car {
  readonly id: string;
}

class Yue implements Car {
  readonly id: string = '1010101010';
  constructor () {}
}

const k3 = new Yue();
console.log(k3.id);
// k3.id = '10000100';

const car: Car = { id: '11111111111' };
console.log(car.id);

