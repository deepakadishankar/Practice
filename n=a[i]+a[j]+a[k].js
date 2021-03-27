let a = [1, 2, 4];
let flag = false
function spl(n) {
    for (i = 0; i < a.length; i++) {
        for (j = 0; j <= n - a[i]; j++) {
            for (k = n - a[i]; k >= 0; k--) {
                if (n - a[i] == a.indexOf(j) + a.indexOf(k)) {
                    console.log("ys", j + k, j, k);
                    // n - a[i] == a[i]
                    //continue;

                    flag = true;
                }
                console.log(i,j,k,"#",a[i],a[j],a[k]);
            }
        }
    }
}

b = spl(7);
console.log(flag);
