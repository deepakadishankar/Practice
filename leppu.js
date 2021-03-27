function pow(base,power) {
    var p = 1;
    for (var i=0; i<power; i++) {
      p *= base;
    }
    return p;
    
  }
 let z = pow(2,9)
  console.log(z);