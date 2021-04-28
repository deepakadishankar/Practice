let head = [1, 1, 2, 3, 3];
let b = [];
b.push(head[0]);
for (i = 0; i < head.length-1; i++) {
    if (head[i] == head[i + 1]) {
    }
    else {
        b.push(head[i+1]);    
    }
} console.log(b);