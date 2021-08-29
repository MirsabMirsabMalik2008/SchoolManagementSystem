import { Component, OnInit } from '@angular/core';
import { ServerService } from '../shared/server.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html'
})
export class StudentsComponent implements OnInit {

  constructor(public SService: ServerService) { }

  ngOnInit() {
    this.SService.GetStudent();
  }

  onDelete(id: number) {
    this.SService.DeleteStudent(id);
  }
  Details(id: any) {
   
  }
}
