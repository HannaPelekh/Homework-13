class Student{
    constructor(name, marks){
        this.name = name   
        this.marks = marks 
    }
};

class Group { 
    students = []
    addStudent(Student) {
        this.students.push(Student)             
    }
    getAverageMark() {
        return (this.students.reduce((acc, el) => {
            acc+= (el.marks.reduce((acc, e) => {
            acc += e 
            return acc
        }, 0))/ el.marks.length           
            return acc
        }, 0)/this.students.length)    
        
    }   
}

const firstStudent = new Student('John Doe', [10, 10, 5, 10]);
const secondStudent = new Student('Alex Smith', [10, 9, 8]);
const lastStudent = new Student('Bob Johnson', [9, 10, 10, 8]);

const feGroup = new Group();

feGroup.addStudent(firstStudent);
feGroup.addStudent(secondStudent);
feGroup.addStudent(lastStudent);

console.log(feGroup.students); 
console.log(feGroup.getAverageMark()); 



