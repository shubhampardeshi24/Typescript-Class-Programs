class Circle
{
    radius : number;
    pi : number;

    constructor (radius : number)
    {
        this.radius = radius;
        this.pi=3.14;
    }

    calculateArea() : number
    {
        return this.pi * this.radius * this.radius;
    }
}




class Circumference extends Circle
{
    constructor(data : number)
    {
        super(data);
    }

    caluclateCircumference() : number
    {
        return 2 * this.pi * this.radius * this.radius;
    }
}
var obj = new Circumference(10.70);
console.log(obj.calculateArea());
console.log(obj.caluclateCircumference());















