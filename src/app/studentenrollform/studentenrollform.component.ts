import { Component, OnInit } from '@angular/core';
import { StdenrollserviceService } from '../shared/stdenrollservice.service';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-studentenrollform',
  templateUrl: './studentenrollform.component.html'
})
export class StudentenrollformComponent implements OnInit {
  formData: string[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'telephone','age','gender','address','city','state','postalcode','action'];
  listdata:MatTableDataSource<any>

  constructor(
    public service: StdenrollserviceService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  
  }

  onClear()
  {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit(){
    this.formData.push(this.service.form.value);  
    console.log(this.formData)
    this.listdata = new MatTableDataSource(this.formData);   
    console.log(this.listdata)
    this.onClear();
    this.toastr.success('Submitted successfully','Student Record')
  }
}
        