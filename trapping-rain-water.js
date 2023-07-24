/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let total = 0; let left=0;   
    let right= height.length;
    let maxLeft = 0;
    let maxRight = 0;
    while(left < right) {
        if(height[left] <= height[right]) {
            if(height[left] <= maxLeft)  { 
                total += maxLeft -  height[left]
            } else {
                maxLeft =  height[left];
            }
          left ++ 
        }else {
            if(height[right] <= maxRight)  {
                total += maxRight -  height[right]
            } else {
                maxRight =  height[right];
            }
        right --;
        }
    }
    return total;
};
console.log(trap([4,2,0,3,2,5]));
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

