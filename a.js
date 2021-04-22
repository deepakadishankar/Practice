let nums = [1];
let list = [];
for (j=0;j< nums.length;j++) {
    let v = j;
    w = 0
    console.log("J index"+j);
    for (let i = v; i < nums.length; i++) {
        s = w+ nums[i];
        console.log(w, "+", nums[i], " = " + s);
        list.push(s)
        w = s;
    }
}
x = Math.max(...list)
console.log(list);
console.log(x);
console.log(x);

















