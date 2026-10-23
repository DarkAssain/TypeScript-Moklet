/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances: StudentAttendance[] = [
    { name: "Alya", present: true },
    { name: "Budi", present: true },
    { name: "Citra", present: false },
    { name: "Dimas", present: true },
    { name: "Eka", present: false },
    { name: "Fajar", present: true },
    { name: "Gita", present: true },
    { name: "Hana", present: false }
];


interface StudentAttendance {
    name: string;
    present: boolean;
}


const totalStudents: number = attendances.length;
let presentCount: number = 0;
let absentCount: number = 0;
let absentNames: string[] = [];

for (let i: number = 0; i < totalStudents; i++) {
    const student: StudentAttendance = attendances[i];
    
    if (student.present) {
        presentCount++;
    } else {
        absentCount++;
        absentNames.push(student.name);
    }
}

const attendancePercentage: number = (presentCount / totalStudents) * 100;

console.log(`Present Students: ${presentCount}`);
console.log(`Absent Students: ${absentCount}`);
console.log(`Absent Students Names: ${absentNames.join(", ")}`);
console.log(`Attendance Percentage: ${attendancePercentage}%`);
