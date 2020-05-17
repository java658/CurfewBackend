import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Registration } from '../models/registration';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';
import { Details } from '../models/details';
//import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registration:Registration;
  usersaveform:FormGroup;
  constructor(private router: Router, private userservice: RegisterService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.usersaveform=this.formBuilder.group({
      id:[],
        userName: ['',Validators.required],
        password: ['',Validators.required],
      })
        }
          onSubmit():void{
            console.log(this.usersaveform.value);
        }
  
  Login() {
  // let userName = this.usersaveform.get('userName').value;
  //   let password = this.usersaveform.get('password').value;

    let authenticationToken = "Basic " + window.btoa("admin" + ":" + "service1");
 
    sessionStorage.removeItem("token");
    sessionStorage.setItem("token", authenticationToken);
    this.userservice.getUserNameAndPassword(this.usersaveform.controls.userName.value, this.usersaveform.controls.password.value).subscribe(data=>{
      this.registration = data;
      console.log(data);
      sessionStorage.removeItem("user");
      sessionStorage.setItem("user",this.registration.user);
      sessionStorage.removeItem("userId");
      sessionStorage.setItem("userId",this.registration.userId.toString());
      if(this.registration.user=='ROLE_GOVERNMENT'){
              this.router.navigate(['/govthome']);
            }
            else if(this.registration.user=='ROLE_DOCTOR'){
              this.router.navigate(['/doctorhome']);
            }
            else{
              this.router.navigate(['/userhome']);
              //localStorage.setItem('userId',this.registration.userId.toString());
            }
            })
          }
}