import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/service/details.service';
import { Router } from '@angular/router';
import { Details } from 'src/app/models/details';

@Component({
  selector: 'app-govrequest',
  templateUrl: './govrequest.component.html',
  styleUrls: ['./govrequest.component.css']
})
export class GovrequestComponent implements OnInit {

constructor(private detailsService : DetailsService , private router : Router) { }

  dets: Details[];
  ngOnInit() {
    this.detailsService.getAllRequests().subscribe(data=>{
      this.dets=data;
    })
    
  }
  updateStatusToProcessing(det:Details){
    this.detailsService.updateStatusToProcessing(det.requestId).subscribe()
    this.dets=this.dets.filter(u=>u!==det);
 }

 updateStatusToRejected(det:Details){
  this.detailsService.updateStatusToRejected(det.requestId).subscribe()
  this.dets=this.dets.filter(u=>u!==det);
}

}
