import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentsComponent } from './MyComponents/add-students/add-students.component';
import { StudentsComponent } from './MyComponents/students/students.component';
import { ServerService } from './MyComponents/shared/server.service';
import { UploadComponent } from './MyComponents/upload/upload.component';
import { NgxPrintModule } from 'ngx-print';
import { FilterPipe } from './MyComponents/Pipes/filter.pipe';
import { Fees } from './MyComponents/shared/Fees.model';
import { FeesComponent } from './MyComponents/fees/fees.component';
import { StartComponent } from './MyComponents/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentsComponent,
    StudentsComponent,
    UploadComponent,
    FeesComponent,
    FilterPipe,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    NgxPrintModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [ServerService, Fees],
  bootstrap: [AppComponent]
})
export class AppModule { }
