import { Injectable } from '@angular/core';
import {FormGroup, FormControl,validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class StdenrollserviceService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullname: new FormControl('',validators.required),
    email: new FormControl('',validators.email),
    telephone: new FormControl('',[validators.required,validators.length(10)]),
    age: new FormControl('',validators.required),
    gender: new FormControl('1',validators.required),
    address: new FormControl('',validators.required),
    city: new FormControl(''),
    state: new FormControl('',validators.required),
    postalcode: new FormControl('',validators.required),


  });
  initializeFormGroup(){
    this.form.setValue({

    });
  }
}
