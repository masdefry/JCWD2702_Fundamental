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

    set calculateTotalSalary({ normalWorkTime, salary, workingHour, overtimeSalary }){
        console.log(salary)
        console.log(normalWorkTime)
        console.log(workingHour)
        console.log(overtimeSalary)
        this.totalSalary = (normalWorkTime * salary) + ((workingHour - normalWorkTime) * overtimeSalary)
    }
}

class FulltimeEmployee extends Employee{
    normalWorkTime = 6
    salary = 100000
    overtimeSalary = 75000

    set addWorkingHour(totalHour){
        this.workingHour = totalHour;
        this.calculateTotalSalary = {
            normalWorkTime: this.normalWorkTime,
            salary: this.salary, 
            workingHour: totalHour, 
            overtimeSalary: this.overtimeSalary
        };
    }
}

class PartimeEmployee extends Employee{
    normalWorkTime = 6
    salary = 50000
    overtimeSalary = 30000

    set addWorkingHour(totalHour){
        this.workingHour = totalHour;
        this.calculateTotalSalary = {
            normalWorkTime: this.normalWorkTime,
            salary: this.salary, 
            workingHour: totalHour, 
            overtimeSalary: this.overtimeSalary
        };
    }
}

let employee1 = new FulltimeEmployee('Defryan', 'Fulltimer', 'Lecturer')
employee1.addWorkingHour = 15
let employee2 = new PartimeEmployee('Mumtaz', 'Partimer', 'Lecturer')
employee2.addWorkingHour = 20
console.log(employee2)