/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

const studentsWithScores = students.map((student) => {
    const correctCount = student.answers.filter(
        (answer, index) => answer === correctAnswers[index]
    ).length;

    return {
        ...student,
        score: correctCount * 20,
    };
});

const passedStudents = studentsWithScores.filter((student) => student.score > 70);

const highestScoreStudent = studentsWithScores.reduce((highest, student) =>
    student.score > highest.score ? student : highest
);

const averageScore =
    studentsWithScores.reduce((total, student) => total + student.score, 0) /
    studentsWithScores.length;

console.log("Student scores:", studentsWithScores);
console.log("Passed students:", passedStudents);
console.log("Highest score student:", highestScoreStudent);
console.log("Average score:", averageScore);