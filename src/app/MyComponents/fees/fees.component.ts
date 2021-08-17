import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServerService } from '../shared/server.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {
  FMForm: FormGroup;
  constructor(public SService: ServerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.FMForm = new FormGroup({
      'id': new FormControl(),
      'studentName': new FormControl('Please Select a Value.', Validators.required),
      'dateAndMonth': new FormControl(null, Validators.required),
      'amount': new FormControl(null, Validators.required),
    });
     this.SService.GetStudent();
  }

  onSubmit(f: any) {
     this.SService.PostFees(f.value).subscribe(res => {
      this.toastr.success('Student Fees Collection!', 'Student Fees Collected Successfully!!');
     }, err => {
        console.log(err)
     })
  }
}
