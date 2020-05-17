import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from '../service/register.service';
import { Registration } from '../models/registration';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 

  constructor(private formBuilder:FormBuilder,private registerService: RegisterService) { }

  registerForm:FormGroup;

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      //id:[],
      userName: ['',Validators.required],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['',Validators.required],
      phone: ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    });
  }

  addUser(){
    let authenticationToken = "Basic " + window.btoa("admin" + ":" + "service1");
    sessionStorage.setItem("token", authenticationToken);
    this.registerService.saveUser(this.registerForm.value).subscribe(data => {
       alert('User Inserted Successfully' +data);
       this.registerForm.reset()
     });
   }
   get f(){
    return this.registerForm.controls;
  }
}
