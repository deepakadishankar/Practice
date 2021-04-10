let a = "the white fox jumps the gate";
let b = "the fox gate";
let ax = a.split(" ");
let bx = b.split(" ");
console.log(bx.length);

for(i=0;i<b.length;i++){
    for (j=0;j<a.length;j++){
    if(ax[i]==bx[j])
    console.log("rt");
}
}
console.log(ax,bx);