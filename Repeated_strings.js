let array = "junkie";
n=100;
input = "u";
counter = 0 ;
for (var i = 0; i <n; i++) { 
  
    console.log(array[i%4]);
    if (array[i%4]==input){
        counter+=1
        
    }
}
console.log(counter);

