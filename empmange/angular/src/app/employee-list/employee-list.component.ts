import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  collection:any= [];
  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe((result)=>{
      console.warn(result)
      this.collection=result
    })
  }
  deleteResto(item)
  {
    this.collection.splice(item-1,1)
    this.employeeService.deleteEmployee(item).subscribe((result)=>{
      console.warn("result",result)
    })
  }

}
