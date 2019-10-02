


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        console.log("im " + this.name);
    }
    sayAge() {
        console.log("im " + this.age + " old");
    }
}

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age)
        this.salary = salary
    }
    saySalary() {
        console.log("i wont..");
    }
    askForBonus() {
        return this.salary * 0.2;
    }
}

// let e = new Employee('Nag', 35, 1000.00)

class Boss extends Employee {
    askForBonus() {
        return this.salary * 0.5 + super.askForBonus();
    }
}

let boss = new Boss('Nag', 35, 1000.00)