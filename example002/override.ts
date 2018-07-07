class Chicken {
  price: number;
  weight: number;
}
class Beef {
  price: number;
  dilicious: boolean;
}

function cooking (food: Chicken | Beef): any {
  // food.price
  // 在外面可以访问相同的属性
  if (food instanceof Chicken) {
    // food.price food.weight
    console.log('~.~');
  }
  if (food instanceof Beef) {
    // food.price food.dilicious
    console.log('(#`O′)');
  }
}

const c1 = new Chicken();
const b = new Beef();
cooking(b);
cooking(c1);