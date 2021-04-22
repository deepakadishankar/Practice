let a = "asdfa";
let b = "asdre";
a = a.split("");
b = b.split("");
console.log(a);
console.log(b);

var countA = a.length;
var countB = b.length;
var count = countA + countB;
var pair = 0;
for (var i = 0; i < countA; i++) {
    for (var j = 0; j < countB; j++) {
        if (a[i] == b[j]) {
            console.log("wosplice",b);
            b.splice(j,1);
            console.log("spliced",b);
            pair++;
            break;
        }
    }
}
console.log(count - (pair * 2));
