import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeSalaryComponent } from './components/employeesalary.component';
import { EmployeeService } from './services/employee.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent,EmployeeSalaryComponent],
  bootstrap: [AppComponent],
  providers: [EmployeeService]
})
export class AppModule { }
