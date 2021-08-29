import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './MyComponents/add-students/add-students.component';
import { StudentsComponent } from './MyComponents/students/students.component';
import { StartComponent } from './MyComponents/start/start.component';
import { FeesDetailComponent } from './MyComponents/fees-detail/fees-detail.component';
import { FeesComponent } from './MyComponents/fees/fees.component';

const routes: Routes = [
    {path: '', component: StartComponent},
    {path: 'AddStudent', component: AddStudentsComponent},
    {path: 'Students', component: StudentsComponent},
    {path: 'FeesCollection', component: FeesComponent},
    {path: 'Fees', component: FeesDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
