import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee, Salary, EmployeeSalary } from '../models/employee';

import { Observable, forkJoin } from 'rxjs';

@Injectable()
export class EmployeeService {
    constructor(private httpClient: HttpClient) { }

    private _baseURL = "http://localhost:4500/api";

    getEmployees() {
        return this.httpClient.get<Employee[]>(`${this._baseURL}/employees`);
    }

    getSalaries() {
        return this.httpClient.get<Salary[]>(`${this._baseURL}/salaries`);
    }

    getEmployeeSalary() {
        let employees = this.getEmployees();
        let salaries = this.getSalaries();
        let employeeSalary = new Array<EmployeeSalary>();

        let merged$ = forkJoin([employees, salaries]).subscribe(results => {
            let mapresult = results[0].map(emp => {
                const salary = results[1].find(u => u.employeeid === emp.id);
                let empSal = new EmployeeSalary();
                empSal.employeeid = emp.id;
                empSal.salary = salary.salary;
                empSal.name = emp.firstname + ' ' + emp.lastname;
                employeeSalary.push(empSal);
                return employeeSalary;
            })

        },err => console.error(err));

        return employeeSalary;
    }
}
