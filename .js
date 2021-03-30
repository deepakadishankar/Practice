
let array = ["153"];
let array1=[];
//box = [];

for (var i = 0; i <= array.length; i++) {

    var split = array[i].split("");  // just split once
    array1.push(split[0]); 

    //var split = array[i].split("");  // just split once
    //box.push(split[i]);
    //var strToNum = new Number(array[i]);
}

console.log(array);
