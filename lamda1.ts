//Lambda statement

var ret = (a:number, b:number)  =>
{
    console.log("Inside lambda function");
    return a+b;
}
console.log(ret(10,11))
