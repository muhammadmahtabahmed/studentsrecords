import { Component, OnInit } from '@angular/core';
import {stdenrollservice} from '../../shared/stdenrollservice.service';
@Component({
  selector: 'app-studentenrollform',
  templateUrl: './studentenrollform.component.html'
})
export class StudentenrollformComponent implements OnInit {

  constructor(private servicee: stdenrollservice) { }

  ngOnInit(): void {
  }

  onClear()
  {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
