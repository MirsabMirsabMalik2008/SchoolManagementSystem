import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddStudentsComponent } from '../add-students/add-students.component';
import { ServerService } from '../shared/server.service';
import { StudentsModel } from '../shared/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  imgPath: string = '';
  Studentaddress: string = '';
  constructor(public SService: ServerService, private router: Router) { }

  ngOnInit() {
    this.SService.GetStudent();
  }
  private Students: StudentsModel[] = [];

  onClick(file: any) {
    this.imgPath = file;
  }

  onClick__(a : any) {
    this.Studentaddress = a;
  }

  onDelete(id: number) {
    this.SService.DeleteStudent(id);
  }
}
