let a = [[1, 2], [3, 4]];
let b = [[5, 6], [7, 8]];
let c = [];
let d = [];
for (i = 0; i < a.length; i++) {

    c[i]=[];
    for (j = 0; j < b.length; j++) {
        console.log(i,j);
        c[i][j] = a[i][j] + b[i][j]
        d.push(c[i][j])


    } //}
} console.log(d);
 

