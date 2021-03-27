let a = "der";
let b = "er";
for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            c = a.replace(a[i], "*");
            c = b.replace(b[j], "*");
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
console.log(counter, a, b, c);