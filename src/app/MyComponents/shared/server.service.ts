import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { StudentsModel } from './student.model';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class ServerService {
    list: StudentsModel[];

    readonly rootURL = 'https://localhost:44377/api/Students/';
    constructor(private HttpClient: HttpClient, private router: Router, private toastr: ToastrService) { }

    PostStudent(FormData: FormGroup) {
        return this.HttpClient.post(this.rootURL, FormData, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

    GetStudent() {
        this.HttpClient.get(this.rootURL).toPromise().then(res => {
            this.list = res as StudentsModel[];
        });
    }

    DeleteStudent(id: number) {
        if (window.confirm('Are sure you want to delete this Student?')) {
            this.HttpClient.delete(this.rootURL + id).subscribe(res => {
                this.toastr.warning('Student Deleted!', 'Student Deleted Successfully!!');
                setTimeout(() => {
                    this.router.navigate(['/AddStudent']);
                }, 0);
                setTimeout(() => {
                    this.router.navigate(['/Students'])
                }, 0);
            });
        }
    }

    PostFees(FormData: FormGroup) {
        return this.HttpClient.post('https://localhost:44377/api/Fees', FormData, {
            headers: new HttpHeaders ({
                'Content-Type': 'application/json'
            })
        })
    }
}