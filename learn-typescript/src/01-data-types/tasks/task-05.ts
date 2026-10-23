/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type Attendance = {
  employeeId: string;
  name: string;
  date: string;
  checkIn: string;
  checkOut: string;
  workHours: number;
  isPresent: boolean;
};

const nabeelLog: Attendance = {
  employeeId: "EMP-010",
  name: "Nabeel Archi Dafa Montesky",
  date: "2026-08-28",
  checkIn: "08:00",
  checkOut: "17:00",
  workHours: 9,
  isPresent: true
};

const dimasLog: Attendance = {
  employeeId: "EMP-011",
  name: "Dimas Febri",
  date: "2026-08-28",
  checkIn: "08:15",
  checkOut: "16:45",
  workHours: 8.5,
  isPresent: true
};

const azuraLog: Attendance = {
  employeeId: "EMP-012",
  name: "Azura Junaidi",
  date: "2026-08-28",
  checkIn: "00:00",
  checkOut: "00:00",
  workHours: 0,
  isPresent: false
};

console.log("=== Employee Attendance System ===");
console.log(nabeelLog);
console.log(dimasLog);
console.log(azuraLog);
