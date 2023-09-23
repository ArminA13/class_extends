// University
// Create a class named University.
// ● It should contain two properties
// ○ teachers ([] as default)
// ○ students ([] as default)
// ● It should contain 3 methods
// ○ addMember(member)
// ○ removeMember(member)
// ○ startLesson() (description below)

// For members you should create two classes, Teacher and Student which will be inherited
// from the class UniversityMember.
// Members should contain 4 properties
// ● name
// ● age
// ● role
// ● energy (24 as default)
// And one method named info() which will return all 4 properties of it.
// After calling the University class startLesson() method students get -2 of energy and
// teachers get -5 of energy.



class UniversityMember {
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.energy = 24;
    }

    info() {
        return {
            name : this.name,
            age: this.age,
            role: this.role,
            energy: this.energy
        }
    }
} 

class Teacher extends UniversityMember {
    constructor(name, age) {
        super(name, age, "Teacher")
    }
}

class Student extends UniversityMember {
    constructor(name, age) {
        super(name, age, "Student")
    }
}


class University {
    constructor() {
        this.teachers = [];
        this.students = [];
    }

    addMember(member) {
        if(member instanceof UniversityMember) {
            if(member.role === "Teacher"){
                this.teachers.push(member)
            } else {
                this.students.push(member)
            }


        }

    }

    removeMember() {

    }

    startLesson() {


    }
} 

const university = new University();
const teacher = new Teacher("Anna", 36);
const student = new Student("Ivan", 24);


university.addMember(teacher);
university.addMember(student);
university.startLesson();


console.log(university.teachers);
console.log(university.students);
console.log(teacher.info());
console.log(student.info());
