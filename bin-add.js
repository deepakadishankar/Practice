let a = "11";
let b = "1";

let carryOver = 0
let result = "";
let maxLength = Math.max(a.length, b.length)
a = a.padStart(maxLength, "0")
b = b.padStart(maxLength, "0")

for (let index = maxLength - 1; index >= 0; index--) {
    
    let operand1 = a[index]
    let operand2 = b[index]
    
    let sum = parseInt(operand1) + parseInt(operand2) + carryOver
    switch(sum) {
        case 3: {
            carryOver = 1
            result = "1" + result
            break;
        } 
        case 2: {
            carryOver = 1
            result = "0" + result
            break;
        }
        case 1: {
            carryOver = 0
            result = "1" + result;
            break;
        }
        case 0: {
            carryOver = 0
            result = "0" + result;
            break;
        }
    }
}
console.log(carryOver + result);