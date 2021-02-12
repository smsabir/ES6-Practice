// class is used to create multiple object using same structure
// Upper came case should be use like: class StudentDetails.
// here constructor method is used to create and initialize an object with a class. new  "class Name". 
class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "RZS";
    }
}

const student1 = new Student(12, "Shuvo");
const student2 = new Student(22, "Rouf");

console.log(student1.name, student2.school);