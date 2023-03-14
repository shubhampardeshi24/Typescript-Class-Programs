function addition(num) {
    var sum = 0;
    var cnt = 0;
    for (cnt = 0; cnt < num.length; cnt++) {
        sum = sum + num[cnt];
    }
    return sum;
}
var num = [10, 20, 30, 40, 50];
var sum = addition(num);
console.log("addition of number is " + sum);
