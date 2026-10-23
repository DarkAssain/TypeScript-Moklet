/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];


type Patient = (typeof patients)[number];

interface HospitalReport {
    totalPatients: number;
    admittedPatients: number;
    dischargedPatients: number;
    patientsByDepartment: Record<string, number>;
    highestBill: number | null;
    lowestBill: number | null;
    averageBill: number;
    totalRevenue: number;
    admittedPatientNames: string[];
}

function getTotalPatients(patientList: Patient[]): number {
    return patientList.length;
}

function getAdmittedPatients(patientList: Patient[]): Patient[] {
    return patientList.filter((patient) => patient.admitted);
}

function getDischargedPatients(patientList: Patient[]): Patient[] {
    return patientList.filter((patient) => !patient.admitted);
}

function getPatientsByDepartment(patientList: Patient[]): Record<string, number> {
    return patientList.reduce<Record<string, number>>((counts, patient) => {
        counts[patient.department] = (counts[patient.department] ?? 0) + 1;
        return counts;
    }, {});
}

function getHighestHospitalBill(patientList: Patient[]): number | null {
    if (patientList.length === 0) {
        return null;
    }

    return patientList.reduce(
        (highestBill, patient) => Math.max(highestBill, patient.bill),
        patientList[0].bill
    );
}

function getLowestHospitalBill(patientList: Patient[]): number | null {
    if (patientList.length === 0) {
        return null;
    }

    return patientList.reduce(
        (lowestBill, patient) => Math.min(lowestBill, patient.bill),
        patientList[0].bill
    );
}

function getTotalHospitalRevenue(patientList: Patient[]): number {
    return patientList.reduce((total, patient) => total + patient.bill, 0);
}

function getAverageHospitalBill(patientList: Patient[]): number {
    if (patientList.length === 0) {
        return 0;
    }

    return getTotalHospitalRevenue(patientList) / getTotalPatients(patientList);
}

function getAdmittedPatientNames(patientList: Patient[]): string[] {
    return getAdmittedPatients(patientList).map((patient) => patient.name);
}

function getHospitalReport(patientList: Patient[]): HospitalReport {
    return {
        totalPatients: getTotalPatients(patientList),
        admittedPatients: getAdmittedPatients(patientList).length,
        dischargedPatients: getDischargedPatients(patientList).length,
        patientsByDepartment: getPatientsByDepartment(patientList),
        highestBill: getHighestHospitalBill(patientList),
        lowestBill: getLowestHospitalBill(patientList),
        averageBill: getAverageHospitalBill(patientList),
        totalRevenue: getTotalHospitalRevenue(patientList),
        admittedPatientNames: getAdmittedPatientNames(patientList)
    };
}

function printHospitalReport(report: HospitalReport): void {
    console.log("Hospital Daily Report");
    console.log(`Total patients: ${report.totalPatients}`);
    console.log(`Total admitted patients: ${report.admittedPatients}`);
    console.log(`Total discharged patients: ${report.dischargedPatients}`);
    console.log("Patients by department:", report.patientsByDepartment);
    console.log(`Highest hospital bill: ${report.highestBill ?? "N/A"}`);
    console.log(`Lowest hospital bill: ${report.lowestBill ?? "N/A"}`);
    console.log(`Average hospital bill: ${report.averageBill}`);
    console.log(`Total hospital revenue: ${report.totalRevenue}`);
    console.log("Admitted patients:", report.admittedPatientNames);
}

printHospitalReport(getHospitalReport(patients));
