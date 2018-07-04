interface Car {
  readonly id: string;
}

class Yue implements Car {
  readonly id: string;
  constructor (id: string) {
    this.id = id;
  }
}

const k3 = new Yue('10001010');
console.log(k3.id);
// k3.id = '10000100';

