let a = "cdec";
let b = "abc";
counter = 0 ;
for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
        console.log("i",i,"j",j,a[i],b[j])
        if (a[i]==b[j]){
            counter += 1;
            console.log("yes");
        }
    }
} console.log(counter);
ax = a.length-counter;
bx = b.length-counter;
xx = ax+bx;
console.log(xx);