import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute,public employeeService: EmployeeService) {}
  
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
    console.warn(this.router.snapshot.params._id)
    this.employeeService.getCurrentEmployee(this.router.snapshot.params._id).
        subscribe((result) => {
        this.addEmp = new FormGroup({
          _id: new FormControl(result['_id']),
          name: new FormControl(result['name']),
          dob: new FormControl(result['dob']),
          address: new FormControl(result['address']),
          role: new FormControl(result['role']),
          salary: new FormControl(result['salary']),
          experience: new FormControl(result['experience'])
        })
      })
  }

  onSubmit() {
    console.warn(this.addEmp.value)
    this.employeeService
    .updateEmployee(this.router.snapshot.params._id,this.addEmp.value)
    .subscribe((result) => this.alert = true)
    } 
  
}
