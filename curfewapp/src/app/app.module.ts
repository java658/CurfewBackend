import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { DoctorhomeComponent } from './doctorhome/doctorhome.component';
import { GovtComponent } from './govt/govt.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './http-interceptor.service';
import { LogoutComponent } from './logout/logout.component';
import { GovrequestComponent } from './govt/govrequest/govrequest.component';
import { GovfinalComponent } from './govt/govfinal/govfinal.component';
import { UserdataComponent } from './userhome/userdata/userdata.component';
import { UserhistoryComponent } from './userhome/userhistory/userhistory.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserhomeComponent,
    DoctorhomeComponent,
    GovtComponent,
    RegistrationComponent,
    LoginComponent,
    LogoutComponent,
    GovrequestComponent,
    GovfinalComponent,
    UserdataComponent,
    UserhistoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
   providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpInterceptorService,
      multi: true
    }
  ],
 bootstrap: [AppComponent]
})
export class AppModule { }
