
let arrayOfDigits = [6,1,4,5,3,9,0,1, 4, 6, 8, 5 , 9, 9 ,9 ,9 ,9, 8];
let stringNumber = arrayOfDigits.join('')
console.log(arrayOfDigits.join(''));
let singleNumber = parseInt(stringNumber);
console.log(singleNumber);

 k = singleNumber+1;

   arrayOfDigits = Array.from(String(k), Number);
   console.log (arrayOfDigits);
