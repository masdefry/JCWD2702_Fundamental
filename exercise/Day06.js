// 01
class Students{
    name='';
    email='';
    age='';
    score=0;

    constructor(name, email, score){
        this.name=name; 
        this.email=email;
        this.score=score;
    }

    set convertDateToAge(age){
        const newAge = new Date(age).getFullYear() // 1999-12-01 ---> 1999
        const now = new Date().getFullYear() // 2024

        this.age = now - newAge
    }
}

let student1 = new Students('Aboy', 'BSD', 90)
student1.convertDateToAge = '1999-05-05';
let student2 = new Students('Immanuel', 'Bogor', 85)
student2.convertDateToAge = '1995-05-20'
let student3 = new Students('Bearent', 'Tangerang', 100)
student3.convertDateToAge = '2000-05-10'

const arrStudents = [
    student1, student2, student3
]

function Score(arr){
    const arrScore = []
    let totalScore = 0

    for(let item of arr){
        arrScore.push(item.score)
        totalScore += item.score
    }

    return `
        Min = ${Math.min(...arrScore)} \n
        Max = ${Math.max(...arrScore)} \n
        Avg = ${totalScore / arr.length}
    `
}
