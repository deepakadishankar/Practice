let prices = [7,2,5,3,16,4];
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
    }
}
console.log(smallest,diff);