import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/models/details';
import { DetailsService } from 'src/app/service/details.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-userhistory',
  templateUrl: './userhistory.component.html',
  styleUrls: ['./userhistory.component.css']
})
export class UserhistoryComponent implements OnInit {
  
  constructor(private detailsService : DetailsService ) { }
  dets: Details[];

  ngOnInit() {
  
   //localStorage.setItem('userId',this.dets.id.toString());

   const id = sessionStorage.getItem('userId');
      if(+id > 0 ){
      this.detailsService.getUserDetailsById(+id).subscribe(data =>{
        this.dets=data;
      });
    }
  }
}