import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './MyComponents/add-students/add-students.component';
import { FeesComponent } from './MyComponents/fees/fees.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { StudentsComponent } from './MyComponents/students/students.component';

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'AddStudent', component: AddStudentsComponent},
  {path: 'Students', component: StudentsComponent},
  {path: 'FeesManagement', component: FeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
