import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    sessionStorage.removeItem("user")
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("userId")
    alert("Logged out successfully")
    this.router.navigate(['/login'])
  }

}
