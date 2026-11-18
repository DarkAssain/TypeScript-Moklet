/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const employees = [
    {
        name: "Andi",
        department: "Backend",
        projects: [
            { name: "LMS", score: 90 },
            { name: "Payment", score: 85 },
            { name: "API", score: 95 },
        ],
    },
    {
        name: "Budi",
        department: "Frontend",
        projects: [
            { name: "Dashboard", score: 80 },
            { name: "Landing Page", score: 75 },
        ],
    },
    {
        name: "Citra",
        department: "Backend",
        projects: [
            { name: "LMS", score: 95 },
            { name: "API", score: 88 },
        ],
    },
];

const employeeAverages = employees.map((employee) => {
    const totalScore = employee.projects.reduce(
        (total, project) => total + project.score,
        0
    );

    return {
        name: employee.name,
        averageScore: totalScore / employee.projects.length,
    };
});

const highPerformers = employeeAverages.filter(
    (employee) => employee.averageScore > 85
);

const employeesWithLowProject = employees
    .filter((employee) =>
        employee.projects.some((project) => project.score < 80)
    )
    .map((employee) => employee.name);

console.log("Employee average scores:", employeeAverages);
console.log("Employees with average score above 85:", highPerformers);
console.log("Employees with a project below 80:", employeesWithLowProject);