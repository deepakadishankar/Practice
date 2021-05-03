let prices = [7,1,5,3,6,4];
smallest = prices[0];
console.log(smallest);
diff = 0;
for (i=0;i<prices.length;i++){
    if (smallest > prices[i+1]){
        smallest = prices[i+1];
        console.log("if",smallest);
    }
    else{
        diff = prices[i] - smallest;
        console.log("else",diff);
        if(newdiff > diff){
            diff = new
        }
    }
}
console.log(smallest,diff);