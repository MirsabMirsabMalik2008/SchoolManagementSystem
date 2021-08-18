import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesComponent } from './MyComponents/fees/fees.component';
import { AddStudentsComponent } from './MyComponents/add-students/add-students.component';
import { StudentsComponent } from './MyComponents/students/students.component';
import { AppComponent } from './app.component';
import { StartComponent } from './MyComponents/start/start.component';

const routes: Routes = [
  {path: '', component: AppComponent, children: [
    {path: '', component: StartComponent},
    {path: 'AddStudent', component: AddStudentsComponent},
    {path: 'Students', component: StudentsComponent},
    {path: 'FeesManagement', component: FeesComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
