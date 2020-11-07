class Human {
    gender = "male";

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = "Frank";
        this.gender = "male";
    }
    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();