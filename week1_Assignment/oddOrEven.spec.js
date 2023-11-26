function oddOrEven(number) {
    if (number == 0) {
        console.log("The number is Zero");
    } else if(number%2 ==0){
        console.log("This is a Even number");
    } else if(number%2 ==1){
        console.log("This is a Odd number");
    } else {
        console.log("This number is Negative number");
    }
}
var number = 0;
oddOrEven(number);