class Employee{
    name = '';
    status = '';
    workingHour = 0;
    position = '';
    totalSalary = 0;

    constructor(name, status, position){
        this.name = name; 
        this.status = status;
        this.position = position;
    }

    calculateTotalSalary(normalWorkTime, salary, workingHour, overtimeSalary){
        this.totalSalary = (normalWorkTime * salary) + ((workingHour - normalWorkTime) * overtimeSalary)
    }
}

class FulltimeEmployee extends Employee{
    constructor(name, status, workingHour, position){
        super(name, status, workingHour, position)
        this.normalWorkTime = 6;
        this.salary = 100000;
        this.overtimeSalary = 75000;
    }

    set addWorkingHour(totalHour){
        this.workingHour = totalHour;
        this.calculateTotalSalary(this.normalWorkTime, this.salary, this.workingHour, this.overtimeSalary)
    }
}

let employee1 = new FulltimeEmployee('Defryan', 'Fulltimer', 'Lecturer')
employee1.addWorkingHour = 15
console.log(employee1)
// let employee2 = new PartimeEmployee('Mumtaz', 'Partimer', 'Lecturer')
// employee2.addWorkingHour = 20
// console.log(employee2)