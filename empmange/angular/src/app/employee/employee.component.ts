import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';

import { Employee } from '../shared/employee.model';
// import { EmployeeService } from '../employee.service';

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService],
})
export class EmployeeComponent implements OnInit {
  constructor(public employeeService: EmployeeService) {}
  
  alert:boolean=false
  addEmp = new FormGroup({
    _id : new FormControl(''),
    name: new FormControl(''),
    dob: new FormControl(''),
    address: new FormControl(''),
    role: new FormControl(''),
    salary: new FormControl(''),
    experience: new FormControl('')
})

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.addEmp.value)
    this.employeeService.postEmployee(this.addEmp.value).subscribe((result)=>{
      console.warn("result here",result)
      this.alert=true
      this.addEmp.reset({})
    }) 
  }
}
