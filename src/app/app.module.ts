import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentenrollformComponent } from './studentenrollform/studentenrollform.component';
import { EnrollstudentlistComponent } from './enrollstudentlist/enrollstudentlist.component';
import { EnrollstudentdetailComponent } from './enrollstudentdetail/enrollstudentdetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import {MatRadioModule} from '@angular/material/radio';
import {StdenrollserviceService} from './shared/stdenrollservice.service'
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentenrollformComponent,
    EnrollstudentlistComponent,
    EnrollstudentdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatRadioModule,
    NgxMatFileInputModule
  ],
  providers: [StdenrollserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
