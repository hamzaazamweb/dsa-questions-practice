/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 * Problem Leetcode
 * https://leetcode.com/problems/backspace-string-compare/submissions/
 */

const buildString = (s) => {
  let strArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      strArr.pop();
    } else {
      strArr.push(s[i]);
    }
  }
  return strArr.join("");
};
var backspaceCompare = function (s, t) {
  const firstStr = buildString(s);
  const secondStr =buildString(t);
  let p1 = firstStr.length - 1 , p2 = secondStr.length  - 1;
  if(p1 !== p2) {
    return false;
  }
  let isEqual=true;

  while(p1 >= 0 &&  p2>= 0) {
    if(firstStr[p1] !== secondStr[p2]) {
        isEqual=false
    }
    p1 --;
    p2 --;
  }
  return isEqual;
};

let s = "ab##",
  t = "c#d#";
console.log(backspaceCompare(s, t));
