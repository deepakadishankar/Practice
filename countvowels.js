let string="aeioulkjjjlkhjkdfklhfdbii";
let counter=0

for (i=0;i<string.length;i++) 
    {
    if(string[i] == "a" || string[i]== "e" || string[i]== "i" || string[i]== "o" || string[i]== "u")
    {
    counter=counter+1
    }
}
console.log(counter)    