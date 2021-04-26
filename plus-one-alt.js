//let digits = [1,0,0,1,9,9];
let digits = [9];
lastindex = digits.length - 1;
//console.log(digits[lastindex]);
console.log("***** Last index",lastindex);
console.log("Last index value is",digits[lastindex]);
console.log("Length",digits.length,"****");


if (digits[lastindex] == 9 ) {
    console.log("Last Index Value is NINE ");
    //digits[lastindex] = 0;
    for (i = 0; i < digits.length; i++) {
        if (digits[lastindex - i] == 9) {
            digits[lastindex - i] = 0
            if (digits[0]==0){  
                let Ho=digits.reverse()
                Ho.push(1);
                digits=Ho.reverse()
                break;
            }
            console.log("loop");
        } else {
           digits[lastindex-i] += 1;
           console.log("i broke");
            break;
           }
    }
}
else {
    digits[lastindex] += 1;
    console.log("Last index value was not 9 ");
}


console.log(digits); 
console.log("FINAL ANWER LENGTH",digits.length);