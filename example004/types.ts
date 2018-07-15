class o {
  name: string = 'default';
}

class a extends o {
  a: string; 
}

class b extends o {
  // b: string;
}

class c extends o {
  // c: string;
}

const test = [ new a(), new b(), new c() ];

if (test[0] instanceof a) {
  (test[0] as a).a;
}

window.onkeydown = (ev) => {
}