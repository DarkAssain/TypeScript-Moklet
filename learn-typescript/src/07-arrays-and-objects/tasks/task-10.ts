/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

const studentResults = submissions.map((submission) => {
    let correct = 0;

    submission.answers.forEach((answer) => {
        const question = questions.find(
            (item) => item.id === answer.questionId
        );

        if (question && question.correctAnswer === answer.answer) {
            correct++;
        }
    });

    return {
        student: submission.student,
        correct,
        wrong: questions.length - correct,
        score: correct * 25,
    };
});

const categories = [...new Set(questions.map((question) => question.category))];
const averageByCategory = categories.map((category) => {
    const categoryQuestions = questions.filter(
        (question) => question.category === category
    );

    const totalCorrect = submissions.reduce((total, submission) => {
        return (
            total +
            submission.answers.filter((answer) => {
                const question = categoryQuestions.find(
                    (item) => item.id === answer.questionId
                );
                return (
                    question !== undefined &&
                    question.correctAnswer === answer.answer
                );
            }).length
        );
    }, 0);

    const possibleAnswers = categoryQuestions.length * submissions.length;

    return {
        category,
        averageScore: Number(((totalCorrect / possibleAnswers) * 100).toFixed(2)),
    };
});

const scores = studentResults.map((student) => student.score);
const averageScore =
    scores.reduce((total, score) => total + score, 0) / scores.length;
const passedStudents = scores.filter((score) => score >= 70).length;

const finalAnalytics = {
    totalStudents: submissions.length,
    averageScore: Number(averageScore.toFixed(2)),
    highestScore: Math.max(...scores),
    lowestScore: Math.min(...scores),
    passedStudents,
    failedStudents: submissions.length - passedStudents,
    passRate: Number(((passedStudents / submissions.length) * 100).toFixed(2)),
};

console.log("Student results:", studentResults);
console.log("Average score by category:", averageByCategory);
console.log("Final exam analytics:", finalAnalytics);

