class a {
  namea: string;
}

class b {
  nameb: string = '2323232';
  changeb () {
    this.nameb = 'changeb';
  }
}

class c implements a, b {
  namea: string;
  nameb: string;
  changeb (): void {}
}

function applyMixins (derivedCtrl: any, baseCtrls: any[]) {
  baseCtrls.forEach(baseCtrl => {
    Object.getOwnPropertyNames(baseCtrl.prototype).forEach(propertyName => {
      Object.defineProperty(derivedCtrl.prototype, propertyName, {
        value: baseCtrl.prototype[propertyName]
      });
    })
  })
}

applyMixins(c, [a, b]);

const newc = new c();
newc.changeb();
console.log(newc.nameb);


