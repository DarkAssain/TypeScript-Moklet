/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

type Enrollment = (typeof enrollments)[number];

function getTotalEnrollments(list: Enrollment[]): number {
    return list.length;
}

function getCompletedEnrollments(list: Enrollment[]): number {
    return list.filter((enrollment) => enrollment.completed).length;
}

function getIncompleteEnrollments(list: Enrollment[]): number {
    return list.filter((enrollment) => !enrollment.completed).length;
}

function getCompletionPercentage(completed: number, total: number): number {
    return total ? (completed / total) * 100 : 0;
}

function getHighestScore(list: Enrollment[]): number | null {
    return list.length ? Math.max(...list.map((enrollment) => enrollment.score)) : null;
}

function getLowestScore(list: Enrollment[]): number | null {
    return list.length ? Math.min(...list.map((enrollment) => enrollment.score)) : null;
}

function getTotalScore(list: Enrollment[]): number {
    return list.reduce((total, enrollment) => total + enrollment.score, 0);
}

function getAverageScore(list: Enrollment[]): number {
    return list.length ? getTotalScore(list) / getTotalEnrollments(list) : 0;
}

function getPassingStudentCount(list: Enrollment[]): number {
    return list.filter((enrollment) => enrollment.score >= 75).length;
}

function getCourseNames(list: Enrollment[]): string[] {
    return [...new Set(list.map((enrollment) => enrollment.course))];
}

function getEnrollmentsForCourse(list: Enrollment[], course: string): Enrollment[] {
    return list.filter((enrollment) => enrollment.course === course);
}

function getTotalLearningHours(list: Enrollment[]): number {
    return list.reduce((total, enrollment) => total + enrollment.duration, 0);
}

function getAverageLearningDuration(hours: number, enrollmentsCount: number): number {
    return enrollmentsCount ? hours / enrollmentsCount : 0;
}

function getDashboardTitle(): string {
    return "Learning Platform Dashboard";
}

function getCompletionSectionTitle(): string {
    return "Completion Statistics";
}

function getAcademicSectionTitle(): string {
    return "Academic Statistics";
}

function getLearningSectionTitle(): string {
    return "Learning Statistics";
}

function getCourseSectionTitle(): string {
    return "Course Statistics";
}

function getTotalEnrollmentsText(list: Enrollment[]): string {
    return `Total enrollments: ${getTotalEnrollments(list)}`;
}

function getCompletedEnrollmentsText(list: Enrollment[]): string {
    return `Completed enrollments: ${getCompletedEnrollments(list)}`;
}

function getIncompleteEnrollmentsText(list: Enrollment[]): string {
    return `Incomplete enrollments: ${getIncompleteEnrollments(list)}`;
}

function getCompletionPercentageText(list: Enrollment[]): string {
    const completed = getCompletedEnrollments(list);
    const total = getTotalEnrollments(list);
    return `Completion percentage: ${getCompletionPercentage(completed, total).toFixed(2)}%`;
}

function getHighestScoreText(list: Enrollment[]): string {
    return `Highest score: ${getHighestScore(list) ?? "N/A"}`;
}

function getLowestScoreText(list: Enrollment[]): string {
    return `Lowest score: ${getLowestScore(list) ?? "N/A"}`;
}

function getAverageScoreText(list: Enrollment[]): string {
    return `Average score: ${getAverageScore(list).toFixed(2)}`;
}

function getPassingStudentsText(list: Enrollment[]): string {
    return `Students with passing scores (>= 75): ${getPassingStudentCount(list)}`;
}

function getTotalLearningHoursText(list: Enrollment[]): string {
    return `Total learning hours: ${getTotalLearningHours(list)}`;
}

function getAverageLearningDurationText(list: Enrollment[]): string {
    const totalHours = getTotalLearningHours(list);
    const totalEnrollments = getTotalEnrollments(list);
    return `Average learning duration: ${getAverageLearningDuration(totalHours, totalEnrollments).toFixed(2)} hours`;
}

function getCourseSummaryText(courseName: string, courseList: Enrollment[]): string {
    return `${courseName}: ${getTotalEnrollments(courseList)} students, average score ${getAverageScore(courseList).toFixed(2)}`;
}

function printCompletionStatistics(enrollmentList: Enrollment[]): void {
    console.log(getCompletionSectionTitle());
    console.log(getTotalEnrollmentsText(enrollmentList));
    console.log(getCompletedEnrollmentsText(enrollmentList));
    console.log(getIncompleteEnrollmentsText(enrollmentList));
    console.log(getCompletionPercentageText(enrollmentList));
}

function printAcademicStatistics(enrollmentList: Enrollment[]): void {
    console.log(getAcademicSectionTitle());
    console.log(getHighestScoreText(enrollmentList));
    console.log(getLowestScoreText(enrollmentList));
    console.log(getAverageScoreText(enrollmentList));
    console.log(getPassingStudentsText(enrollmentList));
}

function printLearningStatistics(enrollmentList: Enrollment[]): void {
    console.log(getLearningSectionTitle());
    console.log(getTotalLearningHoursText(enrollmentList));
    console.log(getAverageLearningDurationText(enrollmentList));
}

function printCourseStatistics(enrollmentList: Enrollment[]): void {
    console.log(getCourseSectionTitle());
    getCourseNames(enrollmentList).forEach((courseName) => {
        const course = getEnrollmentsForCourse(enrollmentList, courseName);
        console.log(getCourseSummaryText(courseName, course));
    });
}

function printLearningDashboard(enrollmentList: Enrollment[]): void {
    console.log(getDashboardTitle());
    printCompletionStatistics(enrollmentList);
    printAcademicStatistics(enrollmentList);
    printLearningStatistics(enrollmentList);
    printCourseStatistics(enrollmentList);
}

printLearningDashboard(enrollments);
