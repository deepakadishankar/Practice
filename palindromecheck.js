function palin(){
let String="maiam";
let result=[]
let i=0
let j=String.length-1
while (i<=j){
    if (String[i]==String[j])
    i++,j--
    
    else 
        return false
        
}
return true
}
let answer=palin()

console.log(answer)
