import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { DoctorhomeComponent } from './doctorhome/doctorhome.component';
import { GovtComponent } from './govt/govt.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { GovrequestComponent } from './govt/govrequest/govrequest.component';
import { GovfinalComponent } from './govt/govfinal/govfinal.component';
import { UserdataComponent } from './userhome/userdata/userdata.component';
import { UserhistoryComponent } from './userhome/userhistory/userhistory.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'doctorhome',component:DoctorhomeComponent},
  {path:'govthome',component:GovtComponent},
  {path:'govrequest',component:GovrequestComponent},
  {path:'govfinal',component:GovfinalComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'userdata',component:UserdataComponent},
  {path:'userhistory',component:UserhistoryComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
