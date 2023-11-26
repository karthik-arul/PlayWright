function checkNumberType(number) {
    if (number>0) {
        console.log("This is a positive number");
    } else if(number<0){
        console.log("This is a negative number");
        
    }else {
        console.log("This number is zero");
    }   
}
var number = 0;
checkNumberType(number);