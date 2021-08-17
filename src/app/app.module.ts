import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentsComponent } from './MyComponents/add-students/add-students.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { ShortenPipe } from './MyComponents/Pipes/shorten.pipe';
import { StudentsComponent } from './MyComponents/students/students.component';
import { ServerService } from './MyComponents/shared/server.service';
import { UploadComponent } from './MyComponents/upload/upload.component';
import { NgxPrintModule } from 'ngx-print';
import { FeesComponent } from './MyComponents/fees/fees.component';
import { FilterPipe } from './MyComponents/Pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentsComponent,
    HeaderComponent,
    StudentsComponent,
    ShortenPipe,
    UploadComponent,
    FeesComponent,
    FilterPipe
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
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
