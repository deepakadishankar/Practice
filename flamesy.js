for (r = 6; r > 1; r--) {

    s = z % r;

    if (s == 0) {
        s = r;
        i = 1;
    }
    else {
        a[s] = '/o';
        i = s + 1;
    }]
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