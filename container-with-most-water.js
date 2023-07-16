/**
 * @param {number[]} height
 * @return {number}
 */
/**
 * optimized solution: Two Pointer (moving them based on some criteria)
 * https://leetcode.com/submissions/detail/995801976/
 */
var maxArea = function (height) {
  let maxAreaVal = 0;
  let p1 = 0;
  let p2 = height.length - 1;
  while (p1 < p2) {
    let area = Math.min(height[p2], height[p1]) * (p2 - p1);
    if (area > maxAreaVal) {
      maxAreaVal = area;
    }
    if (height[p1] <= height[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxAreaVal;
};

let height = [1,8,6,2,5,4,8,3,7];

console.log(maxArea(height));
