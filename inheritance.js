class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}

// to connect to the Parent class we must use extends and call super(); inside child constructor. 
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
        this.fatherName = "Schwerznegger";
    }
    // to declare a function we don't have to write function before it.
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2);