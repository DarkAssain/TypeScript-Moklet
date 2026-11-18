/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

interface Submission {
    student: string;
    submitted: boolean;
    score: number;
}

const totalStudents: number = submissions.length;
let submittedCount: number = 0;
let notSubmittedCount: number = 0;
let passedCount: number = 0;
let reviseCount: number = 0;
let totalScore: number = 0;

const notSubmittedNames: string[] = [];
const reviseNames: string[] = [];

for (let i: number = 0; i < totalStudents; i++) {
    const submission: Submission = submissions[i];
    const score: number = submission.submitted ? submission.score : 0;

    totalScore += score;

    if (!submission.submitted) {
        notSubmittedCount++;
        notSubmittedNames.push(submission.student);
    } else {
        submittedCount++;

        if (score >= 75) {
            passedCount++;
        } else {
            reviseCount++;
            reviseNames.push(submission.student);
        }
    }
}

const averageScore: number = totalScore / totalStudents;

console.log(`Submitted: ${submittedCount}`);
console.log(`Not Submitted: ${notSubmittedCount}`);
console.log(`Passed: ${passedCount}`);
console.log(`Must Revise: ${reviseCount}`);
console.log(`Not Submitted Names: ${notSubmittedNames.join(", ")}`);
console.log(`Must Revise Names: ${reviseNames.join(", ")}`);
console.log(`Class Average Score: ${averageScore}`);