/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

type Submission = (typeof submissions)[number];

interface SubmissionReport {
    totalStudents: number;
    submittedAssignments: number;
    missingAssignments: number;
    passedStudents: number;
    revisionStudents: number;
    averageScore: number;
    highestScore: number;
    lowestScore: number;
}

function getTotalStudents(list: Submission[]): number {
    return list.length;
}

function getSubmittedStudents(list: Submission[]): Submission[] {
    return list.filter((student) => student.submitted);
}

function getMissingStudents(list: Submission[]): Submission[] {
    return list.filter((student) => !student.submitted);
}

function getPassedStudents(list: Submission[]): Submission[] {
    return list.filter((student) => student.score >= 75);
}

function getRevisionStudents(list: Submission[]): Submission[] {
    return list.filter((student) => student.submitted && student.score < 75);
}

function getTotalScore(list: Submission[]): number {
    return list.reduce((total, student) => total + student.score, 0);
}

function getAverageScore(list: Submission[]): number {
    if (list.length === 0) {
        return 0;
    }

    return getTotalScore(list) / getTotalStudents(list);
}

function getHighestScore(list: Submission[]): number {
    if (list.length === 0) {
        return 0;
    }

    return Math.max(...list.map((student) => student.score));
}

function getLowestScore(list: Submission[]): number {
    if (list.length === 0) {
        return 0;
    }

    return Math.min(...list.map((student) => student.score));
}

function getSubmissionReport(list: Submission[]): SubmissionReport {
    return {
        totalStudents: getTotalStudents(list),
        submittedAssignments: getSubmittedStudents(list).length,
        missingAssignments: getMissingStudents(list).length,
        passedStudents: getPassedStudents(list).length,
        revisionStudents: getRevisionStudents(list).length,
        averageScore: getAverageScore(list),
        highestScore: getHighestScore(list),
        lowestScore: getLowestScore(list)
    };
}

function printSubmissionReport(report: SubmissionReport): void {
    console.log("Submission Report");
    console.log(`Total students: ${report.totalStudents}`);
    console.log(`Submitted assignments: ${report.submittedAssignments}`);
    console.log(`Missing assignments: ${report.missingAssignments}`);
    console.log(`Passed students: ${report.passedStudents}`);
    console.log(`Students requiring revision: ${report.revisionStudents}`);
    console.log(`Average score: ${report.averageScore.toFixed(2)}`);
    console.log(`Highest score: ${report.highestScore}`);
    console.log(`Lowest score: ${report.lowestScore}`);
}

printSubmissionReport(getSubmissionReport(submissions));

