var a =[12,5,789,3,76,789789,233,576567,65,7,9,1];
        var length = a.length;
        for (var i = 0; i < length; i++) { 
            for (var j = 0; j < (length - i - 1); j++) { 
                if(a[j] > a[j+1]) {
                    var tmp = a[j];  
                    a[j] = a[j+1];
                    a[j+1] = tmp; 
                }
            }        
        }
        console.log(a);

