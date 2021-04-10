//let a = 123454321;
//var alen = Math.floor(Math.log10(a))+1;
//console.log(alen%2);
//console.log(a);
//if(alen%2==1 && a < 0){
//   x= a.indexOf(1)
//    console.log(x);
//}   
let x = 121;
    // Special cases:   
    // As discussed above, when x < 0, x is not a palindrome.
    // Also if the last digit of the number is 0, in order to be a palindrome,
    // the first digit of the number also needs to be 0.
    // Only 0 satisfy this property.
    if(x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }

    let revertedNumber = 0;
    console.log("aaa",revertedNumber);
    while(x > revertedNumber) {
        console.log("bbb",x,revertedNumber);
        revertedNumber = revertedNumber * 10 + x % 10;
        console.log("ccc",x,revertedNumber);
        x /= 10;
        console.log("ddd",x); 
    }

    // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
    // For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
    // since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
    return x == revertedNumber || x == revertedNumber/10;

 IsPalindrome(121)