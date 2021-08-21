import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';  
import { ServerService } from '../shared/server.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html'
})
export class FeesComponent implements OnInit {
  FMForm: FormGroup;
  MFees: number;

  constructor(public SService: ServerService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.FMForm = new FormGroup({
      'id': new FormControl(),
      'studentName': new FormControl('Please Select a Student.', Validators.required),
      'dateAndMonth': new FormControl(null, Validators.required),
      'amount': new FormControl(null, Validators.required),
      'class': new FormControl('Please Select a Class.', Validators.required),
      'fees': new FormControl(null),
      'MFees': new FormControl(null),
    });
    this.SService.GetStudent();
  }

  onSubmit(f: any) {
    console.log(this.FMForm.controls['fees'].value)
     this.SService.PostFees(f.value).subscribe(res => {
      this.toastr.success('Student Fees Collected Successfully!!', 'Student Fees Collection!');
      this.router.navigate(['/Fees']);
     }, err => {
        console.log(err)
     })
  }

  onChange() {
    if(this.FMForm.controls['class'].value === 'PlayGroup') {
      this.FMForm.controls['fees'].setValue(2000);
    }
    else if(this.FMForm.controls['class'].value === 'Nursery') {
      this.FMForm.controls['fees'].setValue(2000);
    }
    else if(this.FMForm.controls['class'].value === 'KinderGarten') {
      this.FMForm.controls['fees'].setValue(2000);
    }
    else if(this.FMForm.controls['class'].value === 'ClassOne') {
      this.FMForm.controls['fees'].setValue(2500);
    }
    else if(this.FMForm.controls['class'].value === 'ClassTwo') {
      this.FMForm.controls['fees'].setValue(2500);
    }
    else if(this.FMForm.controls['class'].value === 'ClassThree') {
      this.FMForm.controls['fees'].setValue(2500);
    }
    else if(this.FMForm.controls['class'].value === 'ClassFour') {
      this.FMForm.controls['fees'].setValue(2500);
    }
    else if(this.FMForm.controls['class'].value === 'ClassFive') {
      this.FMForm.controls['fees'].setValue(2500);
    }
    else if(this.FMForm.controls['class'].value === 'ClassSix') {
      this.FMForm.controls['fees'].setValue(2800);
    }
    else if(this.FMForm.controls['class'].value === 'ClassSeven') {
      this.FMForm.controls['fees'].setValue(2800);
    }
    else if(this.FMForm.controls['class'].value === 'ClassNineJ') {
      this.FMForm.controls['fees'].setValue(3000);
    }
    else if(this.FMForm.controls['class'].value === 'ClassNineS') {
      this.FMForm.controls['fees'].setValue(3000);
    }
    this.MFees = this.FMForm.controls['fees'].value - this.FMForm.controls['amount'].value;
    this.FMForm.controls['MFees'].setValue(this.MFees);
  }
}
