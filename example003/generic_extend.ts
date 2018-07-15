// 泛型继承
class BeeKeeper {
  hasMask: number;
}

class ZooKeeper {
  constructor (public nameTag: string) {

  }
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  static keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  static keeper: ZooKeeper = new ZooKeeper('zookeeper')
}

function findKeeper<A extends Animal, K> (a: { new(): A; keeper: K}): K {
  return a.keeper;
}

// a 类型用接口的方式来描述
interface aInterface<A, K> {
  new(): A;
  keeper: K;
}

function findKeeper2<A extends Animal, K> (a: aInterface<A, K>): K {
  return a.keeper;
}

const keeper = findKeeper(Lion);
console.log(keeper.nameTag);

const keeper2 = findKeeper(Lion);
console.log(keeper2.nameTag);