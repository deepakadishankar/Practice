function pyramid(n){
    let firstspace = "";
    for (i=0;i<n;i++){
        let intentspace = "";
        for (j=0;j<i;j++){
                intentspace += " "
        }
        for (k=1;k<(n-i-1); k++){
           intentspace += k
       }
        console.log(intentspace+firstspace);
    }
}
pyramid(7)