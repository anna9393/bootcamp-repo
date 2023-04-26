class Student {
    learn() {
        console.log('the student is actually learning')
    }

    question(teacher: Teacher) {
        return teacher.giveAnswer();
    }

}

class Teacher {

    teach(student: Student) {
        return student.learn();
    }
    giveAnswer() {
        console.log('the teacher is answering a question')
    }
}

let student = new Student;
let teacher = new Teacher;

student.question(teacher);
teacher.teach(student);