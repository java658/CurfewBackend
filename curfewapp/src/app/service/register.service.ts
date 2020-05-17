import { Injectable,Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  httpUrl= environment.url + 'frontend-service/user/';
  user:Registration;
  constructor(private httpClient:HttpClient) { }
  saveUser(user:Registration){
   return this.httpClient.post(this.httpUrl +'register', user);

  }
  
  getAllUsers():Observable<Registration[]>{
    return this.httpClient.get<Registration[]>(this.httpUrl + 'getallusers');
  }

  getUserById(userId:number):Observable<Registration[]>{
    return this.httpClient.get<Registration[]>(this.httpUrl +'getuserbyid/'+ userId);
  }

  getUserNameAndPassword(userName:String, password:String):Observable<any>{
    return this.httpClient.get<Registration[]>(this.httpUrl +'login/'+userName+'/'+password);
  }
}