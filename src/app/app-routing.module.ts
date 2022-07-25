import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { StudentenrollformComponent } from './studentenrollform/studentenrollform.component';

const routes: Routes = [
  {
    path :'',
    component : AppComponent,
    children :[  

      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'enroll',
        redirectTo:'/error',
        pathMatch:'full'
      },
      {
        path:'**',
        component:ErrorComponent

      }
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
