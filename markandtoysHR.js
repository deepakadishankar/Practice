let a = [1, 12, 5, 111, 200, 1000, 10, 4,3,8,2,6];

n = a.length;
temp = 0;
console.log(n);

for (i = 0; i < n; i++) {
    for (j = 0; j < n - 1; j++) {
        //console.log(i, j);
        if (a[j] > a[j + 1]) {
            temp = a[j];
            a[j] = a[j + 1];
            a[j + 1] = temp;
            //    console.log(a[j], a[j + 1]);
        }
    }
} console.log(a);
let totalmoney = 50;
let moneyspent = 0;
let counter = 0;
for (k=0;k<a.length;k++){      
   console.log("index",k);
    moneyspent += a[k];
    console.log("value",a[k]);
    console.log(moneyspent,"monspe");
    console.log("wo",counter);
    if (moneyspent <= totalmoney){
        //break;
        counter += 1;
        console.log("w",counter);
    }
    else {
        console.log("YESSSSSSSSSSSSSSSS");
        break;
    }
    

} //console.log(moneyspent);
console.log("We can buy "+ counter+ " number of toys");
//console.log(a);
console.log("ohhhhyesshhh");