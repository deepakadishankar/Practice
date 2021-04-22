let nums = [7,-5,4,1,9,-8,1,3,4,5,-7];
let flist = [];
//let blist = [];
console.log("nums length", nums.length);
x = Math.max(...nums)
console.log("The maximum in the list is", x);
y = nums.indexOf(x);
console.log("Index of the max", y);
let v = x;
let u = x;

for (i = 1; i < nums.length - x + 1; i++) {

    forward = v + nums[y + i];
    flist.push(forward)
    v = forward;
    console.log("the updating value FFFFF", v);
}
for (j = 1; j < x ; j++) {
    backward = u + nums[y - j]
    flist.push(backward)
    u = backward;
    console.log("the updating value BBBBB",j, u);
}



//s = v+(x+nums[y+i]);
//  v = s;    
console.log("Forward>>>>>>>>>>", forward);
//console.log("BAckward<<<<<<<<<<", backward);

console.log(y + i, nums[y + i], x + nums[y + i]);


console.log(flist);
z = Math.max(...flist)
console.log(z);
//console.log(blist);
