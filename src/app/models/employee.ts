export class Employee {
    id: number;
    firstname: string;
    lastname: string;
    salary?: number;
}
export class Salary {
    employeeid: number;
    salary?: number;
}
export class EmployeeSalary {
    employeeid: number;
    name: string;
    salary?: number;
}