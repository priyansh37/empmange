import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    component:EmployeeComponent,
    path:'addEmp'
  },
  {
    component:EmployeeDetailsComponent,
    path:'details/:_id'
  },
  {
    component:EmployeeListComponent,
    path:'list'
  },
  {
    component:RegisterComponent,
    path:'register'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
