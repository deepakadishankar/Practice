function Tosum(nums, target) {
        let b = [];
        for (i = 0; i < nums.length; i++) {
            for (j = 0; j < nums.length; j++) {
                if (i != j) {
                    if (nums[i] + nums[j] == target) {
                        b.push (i,j);
                        return b;
                    }
                }
            }
        }
    } 
    let x = Tosum([2,7,11,15], 9);
    console.log(x);
