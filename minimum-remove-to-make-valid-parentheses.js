/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    console.log(s);
    let arrStr = s.split('');
    let stack = [];
    if (!arrStr.length) {
        return s;
    }
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i] === ')') {
                if(arrStr[stack[stack.length - 1]] === "(") {
                   stack.pop();         
                } else {
                    arrStr[i] = '';
                }
        }
        if(arrStr[i] === '(') {
            stack.push(i);
        }
    }
    while(stack.length) {
        arrStr[stack.pop()]='';  
    }
 
    return arrStr.join('');
};



//console.log(minRemoveToMakeValid("a)b(c)d"));
//minRemoveToMakeValid("lee(t(c)o)de)");
//minRemoveToMakeValid("))((");
//console.log(minRemoveToMakeValid("())()((("));

