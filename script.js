class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
        document.getElementById("output").innerHTML += `<p>Hello, my name is ${this.name}, I am ${this.age} years old.</p>`;
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
        document.getElementById("output").innerHTML += `<p>Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.</p>`;
    }
}

document.getElementById("person-btn").addEventListener("click", () => {
    const person = new Person("Alice", 25);
    person.greet();
});

document.getElementById("employee-btn").addEventListener("click", () => {
    const employee = new Employee("Bob", 30, "Manager");
    employee.jobGreet();
});
