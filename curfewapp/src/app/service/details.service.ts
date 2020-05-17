import { Injectable, Inject } from '@angular/core';
import { Details } from '../models/details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  httpUrl=environment.url+'frontend-service/Details/';
  
  det:Details;
  constructor(private httpClient:HttpClient,@Inject(HttpClient) private ht) { }
  
  saveUser(det:Details):Observable<Details>{
    return this.ht.post(this.httpUrl +'detailsuser', det);
  }

  getAllRequests():Observable<Details[]>{
    return this.httpClient.get<Details[]>(this.httpUrl +'getallrequests');
  }

  getAllProcess():Observable<Details[]>{
    return this.httpClient.get<Details[]>(this.httpUrl + 'getallprocessing');
  }

  getAllFinalStage():Observable<Details[]>{
    return this.httpClient.get<Details[]>(this.httpUrl + 'getallfinal');
  }

  updateStatusToProcessing(requestId:number):Observable<Details[]>{
    return this.httpClient.get<Details[]>(this.httpUrl+ 'updatetoprocessing/'+ requestId);
  }

  updateProcessingToFinalStage(requestId:number):Observable<Details[]>{
    return this.httpClient.get<Details[]>(this.httpUrl+'updatetofinalstage/'+requestId);
  }

  updateFinalStageToSuccess(requestId:number):Observable<Details[]>{
    return this.httpClient.get<Details[]>(this.httpUrl+'updatetosuccess/'+requestId);
  }

  updateStatusToRejected(requestId:number):Observable<Details[]>{
    return this.httpClient.get<Details[]>(this.httpUrl+'updatetorejected/'+requestId);
  }

  getUserDetailsById(userId:number):Observable<Details[]>{
    return this.httpClient.get<Details[]>(this.httpUrl +'status/'+ userId);
  }

  getElementById(requestId:number):Observable<Details[]>{
    return this.httpClient.get<Details[]>(this.httpUrl+'details/' + requestId);
  }
  
}