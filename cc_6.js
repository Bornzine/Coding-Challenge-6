
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}



class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department); // inherit properties
        this.teamSize = teamSize;
    }

    // Override describe()
    describe() {
        return `${this.name} is a manager in the ${this.department} department and manages ${this.teamSize} employees.`;
    }
}



class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(emp => {
            console.log(emp.describe());
        });
    }
}



const emp1 = new Employee("Alice", "HR");
const emp2 = new Employee("Bob", "IT");

const manager1 = new Manager("Sarah", "Sales", 5);



const myCompany = new Company();

myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(manager1);

myCompany.listEmployees();