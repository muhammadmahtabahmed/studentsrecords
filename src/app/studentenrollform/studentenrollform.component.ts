import { Component, OnInit } from '@angular/core';
import { StdenrollserviceService } from '../shared/stdenrollservice.service';
@Component({
  selector: 'app-studentenrollform',
  templateUrl: './studentenrollform.component.html'
})
export class StudentenrollformComponent implements OnInit {

  constructor(public service: StdenrollserviceService) { }

  ngOnInit(): void {
  }

  onClear()
  {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
