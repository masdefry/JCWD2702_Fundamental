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
}

class FulltimeEmployee extends Employee{
    normalWorkTime = 6
    salary = 100000
    overtimeSalary = 75000

    set addWorkingHour(totalHour){
        this.workingHour = totalHour;
        this.calculateTotalSalary();
    }

    calculateTotalSalary(){
        this.totalSalary = (this.normalWorkTime * this.salary) + ((this.workingHour - this.normalWorkTime) * this.overtimeSalary)
    }
}

let employee1 = new FulltimeEmployee('Defryan', 'Fulltimer', 'Lecturer')
employee1.addWorkingHour = 15
console.log(employee1)