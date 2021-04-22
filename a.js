let nums = [4, 4, 8, 55, ">EU", 444, 444, 666]

for (let index = 0; index < nums.length; index++) {
    console.log("incoming ", nums[index]);
    const element = nums[index];

    if (element === 55) {
        nums.splice(index, 1)
    }

   
}

console.log(nums);