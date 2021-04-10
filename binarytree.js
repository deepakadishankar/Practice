let a = [11,27, 39, 47, 83, 104,247];
let input = 83;
let first = 0;
let last = a.length-1;
binary(first, last)
function binary(first,last) {
    console.log("START");
    console.log("First elmnt is ", first, " and last elmnt is ", last);
    let y = a.indexOf(11);
    let x = a.indexOf(a[last])
    console.log("fdggfghfhg",x);
    console.log(y);
    console.log("First indx val", a[first], "and last indx val", a[last]);
    console.log("added index value", a[first] + a[last]);
    addo = a[first] + a[last];

    center = (addo / 2);
    console.log("Added indx val divided", center);
    centerx = Math.floor(center)
    console.log("whole numbered index val", centerx);
    console.log(a.indexOf(centerx),'weree');
    if (centerx != input) {
        console.log("centerx value is ", centerx, "and input val is ", input);
        if (centerx < input) {
            console.log("The Input is greater here");
            first = centerx;
            console.log("value shifted");
            console.log(first, "&", centerx, "&", last);
            last = last;
            //cal function with new values
            console.log("M");
            binary(first, last)
            console.log("N");


        }

        else /*(centerx>input)*/ {
            console.log("The Input is smaller here ");
            //first = first;
            last = centerx
            console.log("value shifted");
            console.log(first, "&", centerx, "&", last);
            //if (first==last){
            //    console.log("The element is not in the list");
            // }
            binary(first, last)
            console.log("o");
        }
    }
    else
        console.log("YESSSSSSSSS");
}

    //else {
    // console.log('NO');







