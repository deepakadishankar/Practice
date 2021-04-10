let array = "fag";
let array1 = "afg"
arrayx= [];
arrayy= [];

for (var i = 0; i < array.length; i++) {
    var split = array[i].split("");  // just split once
    arrayx.push(split[0]);
    var split = array1[i].split("");  // just split once
    arrayy.push(split[0]);
    console.log(arrayx);
    console.log(arrayy);


//for (i=0;i<arrayx.length;i++) {
//    for (j=0;j<arrayy.length;j++){
//        console.log(arrayx[i],arrayy[j]);
//        arrayx[i]=arrayx[j];
//        //console.log("yes");
//    }
    
}
console.log(arrayx);
