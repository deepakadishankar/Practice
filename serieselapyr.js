function leapyears(i) {

    if ((i % 4 == 0) && (i % 100 != 0)) {
        return true
    }

    else if (i % 400 == 0) {
        return true
    }
    else {
        return false
    }
}


for (var i = 2000; i <= 2050; i++) {

    let result = leapyears(i)
    

    if (result==true) {
        console.log(i)
    }

}





