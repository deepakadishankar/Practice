let a = [3, 4, 5, 6, 7];
let flag=false
function spl(n) {

    for (i = 0; i < a.length; i++) {
        for (j = i+1; j <  a.length; j++) {
            console.log(a[i], a[j]);
            if (a[i] + a[j] == n) {    
                 flag=true;
            }
             
                 
        }
    }
} 
spl(7);
console.log(flag);
