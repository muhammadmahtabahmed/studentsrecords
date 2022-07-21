import { Injectable } from '@angular/core';
import {FormGroup, FormControl,Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class StdenrollserviceService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullname: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    telephone: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    age: new FormControl('',Validators.required),
    gender: new FormControl('1',Validators.required),
    address: new FormControl('',Validators.required),
    city: new FormControl(''),
    state: new FormControl('',Validators.required),
    postalcode: new FormControl('',Validators.required),


  });
  initializeFormGroup(){
    this.form.setValue({
        $key:null,
        fullname:'',
        email: '',
        telephone:'',
        age:'',
        gender:'1',
        address:'',
        city:'',
        state:'',
        postalcode:''
    });
  }
}
