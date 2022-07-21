import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentenrollformComponent } from './studentenrollform/studentenrollform.component';

const routes: Routes = [
  {
    path :'',
    component : AppComponent,
    children :[  
      {
        path:'enroll',
        component: StudentenrollformComponent
      },
      {
        path:'',
        component:DashboardComponent
      }
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
