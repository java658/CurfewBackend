import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DetailsService } from 'src/app/service/details.service';
import { RegisterService } from 'src/app/service/register.service';
import { Registration } from 'src/app/models/registration';
import { map } from 'rxjs/operators';
import { Details } from 'src/app/models/details';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

detailsForm:FormGroup;
constructor(private formBuilder:FormBuilder,private detailsService: DetailsService, private register: RegisterService) { }

users:Registration[];
dets:Details[];
ngOnInit() {
  this.detailsForm=this.formBuilder.group({
    userId:[],
    requestId:[],
    userName: ['',Validators.required],
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    age: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    phone: ['',Validators.required],
    source: ['',Validators.required],
    destination: ['',Validators.required],
    reason: ['',Validators.required],
  });
 
  
  const id=sessionStorage.getItem("userId");
    if(+id > 0){
      this.register.getUserById(+id).subscribe(data =>{
        this.detailsForm.patchValue(data);
      });
    }
  }

addDetails(){
  this.detailsService.saveUser(this.detailsForm.value).subscribe(data => {
     alert('Details inserted and Your id : '+sessionStorage.getItem("userId"));
     this.detailsForm.reset()     
   });
   }
  }

   



