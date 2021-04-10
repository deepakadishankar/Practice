let list=[0, 1, 0, 1 , 0 ,0 ,0, 1,0];

let countof1= 0;
let countof0= 0;



    
for (i = 0; i < list.length; i++) {
    if (list[i] ==1){
    countof1++;
    }
  if   (list[i]+list[i+1]+list[i+2] ==0){
    countof0++;    
}
     }     //result.push(true)


        //result.push(false)
        console.log("There are " + countof1 + " number of Ones in the list.");  
        console.log("There are " +countof0+ " number of Zeros in the list.") 
        console.log(list.length-countof1-countof0-1);
 
