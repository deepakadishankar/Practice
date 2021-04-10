const assert = require('assert')
function getMonthName (monthnum) {

switch (monthnum) {

case 1:
    month = 'JAN'
    break;

    case 2:
    month = 'FEB'
    break;
    case 3:
        month = 'MAR'
        break;
    
        case 4:
        month = 'APR'
        break;
        case 5:
    month = 'MAY'
    break;

    case 6:
    month = 'JUN'
    break;
    case 7:
    month = 'JUL'
    break;

    case 8:
    month = 'AUG'
    break;
    case 9:
        month = 'SEP'
        break;
    
        case 10:
        month = 'OCT'
        break;
        case 11:
    month = 'NOV'
    break;

    case 12:
    month = 'DEC'

}
return month
}
console.log(getMonthName(5))
 
assert.equal ("JAN",getMonthName(1))