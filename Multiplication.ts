function multi(a:number, b:number, c:number) : number
{
    let ans : number = a*b*c;
    return ans;
}

var a: number = 10;
var b: number = 20;
var c : number = 30;

var ret : number = multi(a,b,c);
console.log("Multiplication is:: "+ret);
