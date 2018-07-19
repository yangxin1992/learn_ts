namespace A {
  export function inner_a () {}
}

namespace B {
  export function inner_b () {}
}

// A.inner_a

class Album {
  label: Album.AlbumLabel;  
}

namespace Album {
  export class AlbumLabel {
    static id = 'innter';
  }
}

const newa = new Album();
newa.label
Album.AlbumLabel.id

