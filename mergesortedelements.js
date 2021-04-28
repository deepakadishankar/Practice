let a = [1,2,3];
let b = [1,5,6];
for (i=0;i<b.length;i++){
    for (j=0;j<a.length;j++){
        console.log(i,j);
        console.log(b[0],a[0]);
       if( b[i] <= a [j]){
           console.log(b[i],"is smaller than or equal to",a[j]);
      a.splice(i,0,b[i])
        break;
      }
      if( b[0] > a [0]){
        console.log(b[i],"is greater than",a[j]);
        a.splice(i+1,0,b[i]);
        break;
    }
      // else a.splice(i+1,0,b[i])
    }
} console.log(a);