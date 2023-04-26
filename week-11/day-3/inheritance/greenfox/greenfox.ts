
class Person {
    name: string;
    age: number;
    gender: string;

    constructor(name = 'Jane Doe', age = 30, gender = 'female') {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getGoal(): void {
        console.log('My goal is: Live for the moment!');
    }
    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`)
    }
}

class Student extends Person {
    previousOrganization: string;
    skippedDays: number;

    constructor(name = 'Jane Doe', age = 30, gender = 'female', previousOrganization = 'The School of Life') {
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = 0;
    }
    getGoal(): void {
        console.log('My goal is: Be a junior software developer.');
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
    }

    skipDays(numberOfDays: number): number {
        return this.skippedDays += numberOfDays;
    }
}

class Mentor extends Person {
    level: string;

    constructor(name = 'Jane Doe', age = 30, gender = 'female', level = 'intermediate') {
        super(name, age, gender);
        this.level = level;
    }

    getGoal(): void {
        console.log('My goal is: Educate brilliant junior software developers.');
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`)
    }
}

class Sponsor extends Person {
    company: string;
    hiredStudents: number;

    constructor(name = 'Jane Doe', age = 30, gender = 'female', company = 'Google') {
        super(name, age, gender);
        this.company = company;
        this.hiredStudents = 0;
    }

    getGoal(): void {
        console.log('My goal is: Hire brilliant junior software developers.');
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`)
    }

    hire(): number {
        return this.hiredStudents++;
    }
}

class Cohort {
    name: string;
    students: string[];
    mentors: string[];

    constructor(name: string = 'unknown', students: [] = [], mentors: [] = []) {
        this.name = name;
        this.students = students;
        this.mentors = mentors;
    }

    addStudent(Student: any): void {
        this.students.push(Student);
    }

    addMentor(Mentor: any): void {
        this.mentors.push(Mentor);
    }

    info(): void {
        console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)
    }
}
export { Person, Student, Mentor, Cohort, Sponsor };