/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Student = {
  id: string;
  name: string;
  grade: number;
};

type Course = {
  id: string;
  title: string;
  instructor: string;
  hours: number;
};

type Registration = {
  student: Student;
  course: Course;
  date: string;
  isPaid: boolean;
};

const reg1: Registration = {
  student: {
    id: "ST-01",
    name: "Naufal Abyan Rafa Montesky",
    grade: 10
  },
  course: {
    id: "PROG-101",
    title: "Intro to TypeScript",
    instructor: "Teacher Whyna",
    hours: 24
  },
  date: "2026-08-25",
  isPaid: true
};

const reg2: Registration = {
  student: {
    id: "ST-02",
    name: "Dimas Febri A",
    grade: 11
  },
  course: {
    id: "PROG-102",
    title: "Typescript Operators",
    instructor: "Teacher Whyna",
    hours: 40
  },
  date: "2026-08-27",
  isPaid: false
};

const reg3: Registration = {
  student: {
    id: "ST-03",
    name: "Azura Junaidi",
    grade: 12
  },
  course: {
    id: "PROG-101",
    title: "Typescript Conditions & Functions",
    instructor: "Teacher Whyna",
    hours: 24
  },
  date: "2026-08-28",
  isPaid: true
};

console.log("Course Registrations");
console.log(reg1);
console.log(reg2);
console.log(reg3);
