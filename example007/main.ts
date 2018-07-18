function addAge (constructor: Function) {
  constructor.prototype.age = 18;
}

function method (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(target);
  console.log(Hello.prototype);
  console.log('prop: ' + propertyKey);
  console.log('desc: ' + JSON.stringify(descriptor) + '\n\n');
}

function configurable (value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value;
  }
}

@addAge
class Hello {
  name: string;
  // age: number;
  constructor () {
    console.log('Hello');
    this.name = 'yx';
    // this.age = 10;
  }

  @method
  hello () {
    return 'instance method..';
  }

  @method
  static sHello () {
    return 'static method ..';
  }

  @configurable(false)
  get own_name () {
    return this.name;
  }
}

let p = new Hello();
console.log((p as any).age);
console.log(p.own_name);
// p.own_name = 'xy';
// console.log(p.own_name);