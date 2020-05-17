import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/service/details.service';
import { Router } from '@angular/router';
import { Details } from 'src/app/models/details';

@Component({
  selector: 'app-govfinal',
  templateUrl: './govfinal.component.html',
  styleUrls: ['./govfinal.component.css']
})
export class GovfinalComponent implements OnInit {

  constructor(private detailsService : DetailsService , private router : Router) { }
  dets: Details[];
  ngOnInit() {
    this.detailsService.getAllFinalStage().subscribe(data=>{
      this.dets=data;

    })
  }
  updateFinalStageToSuccess(det:Details){
    this.detailsService.updateFinalStageToSuccess(det.requestId).subscribe()
    this.dets=this.dets.filter(u=>u!==det);
 }

 updateStatusToRejected(det:Details){
  this.detailsService.updateStatusToRejected(det.requestId).subscribe()
  this.dets=this.dets.filter(u=>u!==det);
}

}