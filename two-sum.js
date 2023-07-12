/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**https://leetcode.com/problems/two-sum/submissions/992908859/ **/
var twoSum = function(nums, target) {
    
    let dict ={}
    for (let i=0 ; i<nums.length ; i++) {
        const diff = target  - nums[i];
        if(dict[nums[i]] >=0) {
          return [dict[nums[i]],i] ;                   
        }  else {
            dict[diff] = i;
        }   
    }
    return null;

};


let nums = [-1,-2,-3,-4,-5]
let  target = -8

console.log("two sum is",twoSum(nums,target));