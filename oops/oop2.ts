class Arithmetic
{
    private no1 : number;
    private no2 : number;
    
    constructor(no1 : number, no2: number)
    {
        this.no1 = no1;
        this.no2 = no2;
    }

    addition(no1: number, no2: number):number {
        let ans : number = 0;

        ans = no1 + no2;
    
        return ans;
    }
    
    sub(no1: number, no2: number):number {
        let ans : number = 0;
    
        ans = no1 - no2;
    
        return ans;
    }
}

var add = new Arithmetic(11,10);
console.log("Addition is:: "+add.addition(11,10));
console.log("Subtraction is:: "+add.sub(11,10));

var subt = new Arithmetic(20,10);
console.log("sub is:: "+subt.addition(20,10));
console.log("sub is:: "+subt.sub(20,10));
