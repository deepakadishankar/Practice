//nums = [1,2,3,4,5];
//target = 9;
function Tosum(nums,target){
    for (i=0;i<nums.length;i++){
        for (j=0;j<nums.length;j++){
            //console.log(i,j);
            if (nums[j] == target - nums[i]){
             return ("yes",i,j);
            }
        }
    }
} Tosum ([1,2,3,4,5],9)
