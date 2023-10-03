/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
 
    const n = s.length;
     const charSet = new Set();
     let maxLength = 0;
     let left = 0;
     let right = 0;
   
     while (right < n) {
       if (!charSet.has(s[right])) {
         charSet.add(s[right]);
         maxLength = Math.max(maxLength, right - left + 1);
         right++;
       } else {
         charSet.delete(s[left]);
         left++;
       }
     }
   
     return maxLength;
   
};

