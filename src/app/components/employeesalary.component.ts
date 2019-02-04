import { Component, Input } from '@angular/core';
import { EmployeeSalary } from '../models/employee';
@Component({
  selector: 'employeesalary-list',
  templateUrl: './employeesalary.component.html',
})
export class EmployeeSalaryComponent {
  @Input()
  employeesalaries: EmployeeSalary[];
}