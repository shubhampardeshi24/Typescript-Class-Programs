function  addition(no1: number, no2: number):number {
    let ans : number = 0;

    ans = no1 + no2;

    return ans;
}

function  sub(no1: number, no2: number):number {
    let ans : number = 0;

    ans = no1 - no2;

    return ans;
}

var a : number = 11;
var b : number = 10;
var ret : number = 0;

ret = addition(a,b);

console.log("Addition is:: "+ret);

ret = sub(a,b);
console.log("sub is "+ret);