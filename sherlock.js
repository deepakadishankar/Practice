var s="adssashdkshsiiodddahjd";
let result ={};
for (let i = 0; i < s.length; i++) {
    const element = s[i];  
 let lettercount = count(s,element)
 result [element]=lettercount
}
console.log(result);
function count(str,c){
    let counter = 0
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if ( element===c ){
            counter= counter+1
        }
    }
    return counter
}

