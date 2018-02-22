import { Component } from '@angular/core';

import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  employeeArray: Employee[] = [
    {id: 1, name: 'Ryan', country: 'USA'},
    {id: 2, name: 'Angelica', country: 'CANADA'},
    {id: 3, name: 'Joe', country: 'ARGENTINA'}
  ];

  selectedEmployee: Employee = {id:0, name: '', country: ''};

  openForEdit(employee: Employee): void 
  {
    this.selectedEmployee = employee;
  }

  addOrEdit(): void
  {
    if(this.selectedEmployee.id === 0) // INSERT
    {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = {id:0, name: '', country: ''};
  }

  delete(): void 
  {
    if(confirm('Are you sure you want to delete it?'))
    {
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = {id:0, name: '', country: ''};
    }
  }

}
