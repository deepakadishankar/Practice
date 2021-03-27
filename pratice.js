let r = "flames";

while (r.length > 1) {
    r = r.replace(r[4 % 6 - 1])
}

//if (6 * n % 6 == q[q.length - 1]) {

//}
for (r = 6; r > 1; r--) {

    s = z % r;

    if (s == 0) {
        s = r;
        i = 1;
    }
    else {
        a[s] = '';
        i = s + 1;
    }
    j = 1;
    while (1) {
        if (i == s) { break; }
        b[j] = a[i]; 
        if (i == r) { i = 0; }
        i++;
        j++;
    }
    for (i = 1; i <= r - 1; i++) {

        a[i] = b[i];

    }
}