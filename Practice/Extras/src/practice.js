/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var jump = function(nums) {
    if(nums.length<2)
        return 0;
        if(nums.length<3)
        return 1;
    let left=0,right=1, steps=0;
    while(right<nums.length){
        // 1+1 = 4 < 3
        if(nums[left]+1<(nums[right])){
            steps++;
            left=right;
            right++;
        }
        else{
            left=nums[left]+left;
            right=1+left;
            ++steps;
        }
    }
    return steps;
};


var nums = [1,1,1,1]

// var nums = [2,3,6,5,4,0,2,1]
// var nums=[2,3,0,1,4]


console.log(jump(nums))


// maximum jump = index + power