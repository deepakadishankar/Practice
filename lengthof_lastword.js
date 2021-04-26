let s ="hell0        ";

console.log(s.length);
//console.log(s[2]);
let count = 0;
function deletor(s){
if (s[s.length-1] == " "){
    let ns = s.slice(0,s.length-1);
    //let ns = s.splice(s[5],"Q")
    console.log("after replacement");
    console.log(ns.length);
    s = ns;
    console.log("yesdaa");
    console.log(s+"*");
   
    deletor(s);

}
   
console.log("vaada nee vaadaa");
for (i=s.length-1;i>=0;i--){
    console.log(s);
    console.log("index ",i);
    console.log("letter",s[i]);
    count += 1;
    console.log("COUNT",count);
    if (s[i] ==" "){
        console.log("mankatha daw");
        count -= 1;
        break;   
    }
}
}
deletor(s);
console.log(count);