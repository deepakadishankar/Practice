let list = [1,2,3,4,5];
let givennum= 5;
let getnum=givennum[i];
let numofrot=4;

for (i=0;i<numofrot;i++){
    var swapnum=givennum[i-1];
    temp=givennum;
    givennum=swapnum;
   var swapnum=temp;
   list.push(swapnum)
    var temp=0;
    console.log(givennum,swapnum);
}
console.log(list);