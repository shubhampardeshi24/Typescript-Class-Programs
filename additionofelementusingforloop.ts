

function addition(num: number[]) : number
{
    let sum : number = 0;
    let cnt : number = 0;

    for(cnt = 0; cnt<num.length;cnt++)
    {
        sum = sum + num[cnt]
    }
    return sum
}
var num : number[] = [10,20,30,40,50]
var sum : number =addition(num)
console.log("addition of number is "+sum)