function reverse() {
    let result = ""
    let input = "illuminati"
    for (i = input.length-1; i >= 0; i--)
        result=result+input[i]
    //console.log(result);malayalamb

    return result;
}
let answer = reverse()
console.log(answer);
