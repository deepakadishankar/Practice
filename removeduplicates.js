

let nums = [0, 1,1,1,2,2,3,3,4]


var removeDuplicates = function(nums) {
    if(nums.length == 0) return 0;
    
    let i = 0;
    
    for(let j = i+1; j < nums.length; j++){
        if(nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j]
        }
    }
    return i + 1
};




console.log(removeDuplicates(nums), nums);

