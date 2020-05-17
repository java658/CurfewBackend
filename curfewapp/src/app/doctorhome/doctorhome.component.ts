import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../service/details.service';
import { Router } from '@angular/router';
import { Details } from '../models/details';

@Component({
  selector: 'app-doctorhome',
  templateUrl: './doctorhome.component.html',
  styleUrls: ['./doctorhome.component.css']
})
export class DoctorhomeComponent implements OnInit {

 

  constructor(private detailsService : DetailsService , private router : Router) { }
  dets: Details[];
  ngOnInit() {
    this.detailsService.getAllProcess().subscribe(data=>{
      this.dets=data;

    })
  }
  updateProcessingToFinalStage(det:Details){
    this.detailsService.updateProcessingToFinalStage(det.requestId).subscribe()
    this.dets=this.dets.filter(u=>u!==det);
 }

 updateStatusToRejected(det:Details){
  this.detailsService.updateStatusToRejected(det.requestId).subscribe()
  this.dets=this.dets.filter(u=>u!==det);
}

}
