const assert = require('assert');
function checkGrade(mark)
{if (mark>=90) {
    return "A+"
} else if((mark>=76)&&(mark<90)) {
    return 'A'
} 
else if((mark<76)&&(mark>=51)) {
    return 'B'
} 
else if((mark<51)&&(mark>=36)) {
    return 'C'
} 
else {
    return "FAIL"
}}

assert.equal('A', checkGrade(77))

assert.equal('A+', checkGrade(90))

assert.equal('A', checkGrade(76))



