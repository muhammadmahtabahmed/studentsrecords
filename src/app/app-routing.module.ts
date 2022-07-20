import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentenrollformComponent } from './studentenrollform/studentenrollform.component';

const routes: Routes = [
  {
    path :'',
    component : AppComponent,
    children :[
      {
        path:'',
        component: StudentenrollformComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
