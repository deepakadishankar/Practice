let prices = [2,4,1];
smallest = prices[0];
console.log(smallest);
diff = 0;
for (i=0;i<prices.length;i++){
    if (smallest > prices[i+1]){
        smallest = prices[i+1];
        console.log("if",smallest);
    }
    else{
        newdiff = prices[i+1] - smallest;
        console.log("else",diff);
        newdiff = prices[i+1] - smallest;
    }
}
console.log(smallest,diff,newdiff);