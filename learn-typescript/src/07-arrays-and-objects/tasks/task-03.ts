/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];

const presentStudentNames = students
    .filter((student) =>
        attendance.some(
            (record) =>
                record.studentId === student.id && record.status === "present"
        )
    )
    .map((student) => student.name);

const absentStudents = students
    .filter((student) =>
        attendance.some(
            (record) =>
                record.studentId === student.id && record.status === "absent"
        )
    )
    .map((student) => student.name);

const lateStudents = students
    .filter((student) =>
        attendance.some(
            (record) =>
                record.studentId === student.id && record.status === "late"
        )
    )
    .map((student) => student.name);

const studentStatuses = students.map((student) => {
    const record = attendance.find(
        (attendanceRecord) => attendanceRecord.studentId === student.id
    );

    return { name: student.name, status: record?.status };
});

console.log("Present students:", presentStudentNames);
console.log("Absent students:", absentStudents);
console.log("Late students:", lateStudents);
console.log("Student statuses:", studentStatuses);