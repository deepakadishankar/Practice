let prices = [7,1,5,3,4,6];
smallest = prices[0];
console.log(smallest);
diff = 0;
for (i=0;i<prices.length;i++){
    if (){
    if (smallest > prices[i+1]){
        smallest = prices[i+1];
        console.log("if",smallest);
    }
    else{
        newdiff = prices[i+1] - smallest;
        console.log("else",diff);
        if(newdiff > diff){
            diff = newdiff; 
        }
    }
}
}
console.log(smallest,diff,newdiff);