import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Employee, Salary, EmployeeSalary } from './models/employee';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedCharacter: {};
  employees: Employee[];
  salaries: Salary[];
  employeesalaries: EmployeeSalary[];
  constructor(private employeeSerivce: EmployeeService) { }
  ngOnInit() {
    
  }

  getEmployee(): void {
    this.employeeSerivce.getEmployees()
      .subscribe(
        resultArray => this.employees = resultArray,
        error => console.log("Error :: " + error)
      )
  }

  getSalaries(): void {
    this.employeeSerivce.getSalaries()
      .subscribe(
        resultArray => this.salaries = resultArray,
        error => console.log("Error :: " + error)
      )
  }

  getEmployeeSalaries(): void {
    this.employeesalaries=this.employeeSerivce.getEmployeeSalary();
    console.log(this.employeesalaries);
  }
}
