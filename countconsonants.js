let string="lkjhgfakou";
let counter=string.length

for (i=0;i<string.length;i++) 
    {
    if(string[i] == "a" || string[i]== "e" || string[i]== "i" || string[i]== "o" || string[i]== "u")
    {
    counter=counter-1
    }
}
console.log(counter)    
console.log(string.length-counter);