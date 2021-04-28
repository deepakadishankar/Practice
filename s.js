let a = [1,2,3];
let b = [2,5,6]
if(b[0]<=a[0]){
    a.splice(0, 0,b[0]);
    console.log(a);
}
if (b[0]>a[0]){
    a.splice(0, 0,b[1]);
    console.log(a); 
}
