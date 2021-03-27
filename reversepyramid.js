function rightTriangle(n) {
    let firstspace = "$";
    for (let i = 0; i < n; i++) {
        intentspace = "#";
      for(let j = 0; j< i; j++){
        intentspace += "@";
      }
      for(let k = 1; k <= n-i; k++){
        firstspace += k;
      }
      firstspace +=" "
      console.log(intentspace+firstspace);
    }
    
  }
  rightTriangle(4);