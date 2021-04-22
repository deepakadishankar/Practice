let nums = [1]
let target = 0;
//s = nums[nums.length - 1];
//console.log(nums[nums.length - 1]);
if (target != 0) {


    if (target > nums[nums.length - 1]) {
        console.log(nums.indexOf(nums[nums.length - 1]) + 1);
    }
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            var x = nums.indexOf(nums[i]);
            console.log(x);
            break;
        }

        if (nums[i] > target) {
            console.log(i);
            break;
        }

    }
}
else{
    console.log(0);
}


//console.log("VOILA");
