import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ServerService } from '../shared/server.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html'
})
export class AddStudentsComponent implements OnInit {
  ASForm: FormGroup;
  public response: {dbPath: ''};
  constructor(public SService: ServerService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.ASForm = new FormGroup({
      'id': new FormControl(null),
      'studentName': new FormControl(null, Validators.required),
      'class': new FormControl('Please select a Value.', Validators.required),
      'mobileNumber': new FormControl(null, Validators.required),
      'gender': new FormControl('Male', Validators.required),
      'admissionDate': new FormControl(null),
      'address': new FormControl(null, Validators.required),
      'dateOfBirth': new FormControl(null),
      'file': new FormControl(''),
      'fees': new FormControl(null)
    });
  }

  onSubmit(f: any) {
    if(this.ASForm.controls['class'].value === 'PlayGroup') {
      this.ASForm.controls['fees'].setValue(2000);
    }
    else if(this.ASForm.controls['class'].value === 'Nursery') {
      this.ASForm.controls['fees'].setValue(2000);
    }
    else if(this.ASForm.controls['class'].value === 'KinderGarten') {
      this.ASForm.controls['fees'].setValue(2000);
    }
    else if(this.ASForm.controls['class'].value === 'ClassOne') {
      this.ASForm.controls['fees'].setValue(2500);
    }
    else if(this.ASForm.controls['class'].value === 'ClassTwo') {
      this.ASForm.controls['fees'].setValue(2500);
    }
    else if(this.ASForm.controls['class'].value === 'ClassThree') {
      this.ASForm.controls['fees'].setValue(2500);
    }
    else if(this.ASForm.controls['class'].value === 'ClassFour') {
      this.ASForm.controls['fees'].setValue(2500);
    }
    else if(this.ASForm.controls['class'].value === 'ClassFive') {
      this.ASForm.controls['fees'].setValue(2500);
    }
    else if(this.ASForm.controls['class'].value === 'ClassSix') {
      this.ASForm.controls['fees'].setValue(2800);
    }
    else if(this.ASForm.controls['class'].value === 'ClassSeven') {
      this.ASForm.controls['fees'].setValue(2800);
    }
    else if(this.ASForm.controls['class'].value === 'ClassNineJ') {
      this.ASForm.controls['fees'].setValue(3000);
    }
    else if(this.ASForm.controls['class'].value === 'ClassNineS') {
      this.ASForm.controls['fees'].setValue(3000);
    }
    this.ASForm.controls['file'].setValue('https://localhost:44377/' + this.response.dbPath);
    this.SService.PostStudent(f.value).subscribe(res => {
      this.router.navigate(['/Students']);
      this.toastr.success('Student Creation!', 'Student Added Successfully!!');
    }, err => {
      console.log(err)
    });
  }

  public uploadFinished = (event: any) => {
    this.response = event;
  }
}
