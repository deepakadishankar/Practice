let a = [1, 2, 3];
let b = [1, 2, 3];
let failed = false;
if (a.length == b.length) {
    for (i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {

            failed = true
            break;   
        }
    }
} else {
    console.log("NO");
}


if (failed){
    console.log("No");
} else {
    console.log("yes");
}




