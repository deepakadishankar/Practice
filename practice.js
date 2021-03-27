let a = "eart";
let b = "ayhr";
for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            a = a.replace(a[i], "*");
            b = b.replace(b[j], "*");
            break;
        }
    }
}
let counter = 0;
for (i = 0; i < a.length; i++) {
    if (a[i] != "*") {
        counter += 1;
    }
}
for (i = 0; i < b.length; i++) {
    if (b[i] != "*") {
        counter += 1;
    }
}
console.log(counter,a, b);
