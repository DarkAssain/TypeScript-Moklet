/**
 * A student can participate in the graduation ceremony only if all of the following conditions are met:
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * Today, the administration receives the following student information.
| Information  | Value |
| ------------ | ----- |
| Final Score  | 82    |
| Attendance   | 94    |
| Tuition Paid | Yes   |

 * Task: Store and display the result in a variable named "isEligible"

 */

const finalScore: number = 82;
const attendancePercentage: number = 94;
const isTuitionPaid: boolean = true;

const isEligible: boolean = (finalScore >= 75) && (attendancePercentage >= 90) && isTuitionPaid;

console.log(`Final Score:  ${finalScore} (Min 75) -> ${finalScore >= 75}`);
console.log(`Attendance:   ${attendancePercentage}% (Min 90%) -> ${attendancePercentage >= 90}`);
console.log(`Tuition Paid: ${isTuitionPaid} -> ${isTuitionPaid}`);
console.log(`-----------------------------------`);
console.log(`Is the student eligible to graduate? ${isEligible}`);
