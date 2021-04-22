let nums = [12,23,3,3,3,4,5,6,3,5,6,3,8,3,9,3,7]
let val = 3;
//nums.splice(2,2);
for (i=0;i<nums.length;i++){
    
    if (nums[i]==val){
        nums.splice(i,1);
        i--
        console.log("yessys");

    }
}
console.log(nums);   