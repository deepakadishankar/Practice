let input=100
let num1=0
let num2=1
let num3=num1+num2
while (num3<input){
    num3=num1+num2;
    num1=num2;
    num2=num3;
    
    console.log(num3);
}
