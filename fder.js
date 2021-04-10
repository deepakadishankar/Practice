var a = [1,2,3,4,5];
var res = [];
let numofrot=4;
for (let i = 0; i < a.length; i++) {
    const element = a [(i+numofrot)%a.length ];
    res[i] = element

 //console.log(element);  

}
console.log(res);
