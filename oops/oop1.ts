
//class = data + methods
//class = characteristics + behaviour

class Student
{
    private name : String;
    private marks : number;
    private age : number;
    private address : String;

    constructor(name : String, marks :number, age:number, address:String)
    {
        this.name = name;
        this.marks = marks;
        this.age = age;
        this.address = address
    }

    display():void{
        console.log("name of student: "+this.name);
        console.log("marks of student: "+this.marks);
        console.log("age of student: "+this.age);
        console.log("address of student: "+this.address);
    }
}

var shubham = new Student("shubham", 90, 25, "Pune");
shubham.display();