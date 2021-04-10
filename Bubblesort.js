let a = [3, 687, 53, 45, 354, 62, 11, 9, 2];
n = a.length;
temp = 0;
console.log(n);
for (i = 0; i < n; i++) {
    for (j = 0; j < n - 1; j++) {
        //console.log(i, j);
        if (a[j] > a[j + 1]) {
            temp = a[j];
            a[j] = a[j + 1];
            a[j + 1] = temp;
            //    console.log(a[j], a[j + 1]);
        }
    }
} console.log(a);