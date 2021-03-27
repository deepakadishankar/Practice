function pyramid(n) {
    let output = " ";
    for (let i = 0; i < n; i++) {
      var myspace = "y";
        for (let j = 0; j < (n - i -1); j++) {
            myspace += "!";
        }
        for (let k = 1; k <= i ; k++) {
            output += k;

        }
        console.log(myspace + output );
        output = "";
    }
} pyramid(7)
