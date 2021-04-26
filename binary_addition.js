let a = "1010";
let b = "1011";
let carryover = 0;
let addonstr = "0";
let lengthOfa = a.length
let lengthOfb = b.length
let theGreatestLength = 0;


let longOne, shortOne;
if (a.length > b.length) {
    longOne = a;
    shortOne = b;
} else {
    longOne = b;
    shortOne = a;
}

for(k=0;k< longOne.length-shortOne.length;k++){
    shortOne = addonstr.concat(shortOne);
    //console.log(b);
   }

// if (lengthOfa > lengthOfb){
//     theGreatestLength = lengthOfa;
//    for(k=0;k< theGreatestLength-lengthOfb;k++){
//     b = addonstr.concat(b);
//     //console.log(b);
//    }
// }
// else {
//     theGreatestLength = lengthOfb;
//     for(k=0;k< theGreatestLength-lengthOfa;k++){
//         a = addonstr.concat(a);
//         //console.log(a);
//        }
// }
console.log("The Greatest",longOne.length);
let res = [];
console.log("a =",a,"b =",b);
for (i = theGreatestLength-1 ; i >= 0; i--) {
    console.log("Executing...");

    if (a[i] == 0 && b[i] == 0) {
        console.log("Its Zero plus Zero");
        if (carryover == 1) {
            console.log("Its Zero plus Zero with CO One");
            res.push(1);
            carryover -= 1;
        }
        else {
            console.log("Its Zero plus Zero with CO Zero");
            res.push(0);
        }

    }
    if (a[i] == 1 && b[i] == 0) {
        console.log("Its One plus Zero");
        if (carryover == 1) {
            console.log("Its One plus One Zero CO One");
            res.push(0);
        }
        else {
            console.log("Its One plus Zero with CO Zero");
            res.push(1);
        }
    }
    if (a[i] == 0 && b[i] == 1) {
        console.log("Its Zero plus One");
        if (carryover == 1) {
            console.log("Its Zero plus One with CO One");
            res.push(0);
        }
        else {
            console.log("Its Zero plus One with CO Zero");
            res.push(1);
        }
    }
    if (a[i] == 1 && b[i] == 1) {
        console.log("Its One plus One");
        if (carryover == 1) {
            console.log("Its One plus One with CO One");
            res.push(1);
            console.log("CO now is",carryover);
        }
        else {
            console.log("Its One plus One with CO Zero");
            res.push(0);
            carryover += 1;
            console.log("CO now is",carryover);
        }
    }

}
console.log("nope");
console.log(res);
res.push(carryover)
console.log(res);
if (res[res.length-1]==0)
    res.pop();
console.log(res);
finalResult = res.reverse()
console.log(finalResult);
//finalResult = finalResult.toString();
finalResult = finalResult.join('');
console.log(finalResult);
console.log(carryover);