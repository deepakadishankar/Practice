function year(number) 

{

//check if the number is even
if((number % 4 == 0)&&(number % 100!=0)) {
return true
}

// else if(number %100 == 0) {

// return true
// }
else if(number % 400 == 0){
return true
}
else {
return false
}
}
