import { Component, OnInit } from '@angular/core';
import { ServerService } from '../shared/server.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html'
})
export class StudentsComponent implements OnInit {
  filteredString = '';
  imgPath: string = '';
  Studentaddress: string = '';
  constructor(public SService: ServerService) { }

  ngOnInit() {
    this.SService.GetStudent();
  }

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
