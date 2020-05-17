// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map } from 'rxjs/operators';

// const url = "https://github.com/java658/CaseStudy/blob/master/frontend-service.properties";
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthServiceService {
  
//   authUsername: String;
//   authPassword: String;

//   constructor(private http: HttpClient) { }

//   authenticate(authUsername: string, authPassword: string) {

//     // create a security token
//     let authenticationToken = "Basic " + window.btoa(authUsername + ":" + authPassword);
//     console.log(authenticationToken);
//     let headers = new HttpHeaders({
//       Authorization: authenticationToken
//     });
    
//     console.log("calling server")
//     console.log(authenticationToken);
//     // send the request
//     return this.http.get(url,{ headers }).pipe(
//       map((_res) => {
//         sessionStorage.setItem("authUsername", authUsername);
//         sessionStorage.setItem("authPassword", authPassword);
//         // save the token
//         sessionStorage.setItem("token", authenticationToken);
//       }),
//       // failure function
//       map(failureData => {
//         // console message 
//         console.log("failure")
//         return failureData;
//       })
//     );
//   }
//   getAuthenticationToken() {
//     return sessionStorage.getItem("token");

//     // throw new Error("Method not implemented.");
//   }

// }


//     // authenticationService(authUsername: String, authPassword: String) {

//     //         return this.http.get(url,
//     //           { headers: 
//     //             { authorization: this.setHeaders(authUsername, authPassword) } }).pipe(map((res) => {
//     //             this.authUsername = authPassword;
//     //             this.authPassword = authPassword;
//     //            // this.registerSuccessfulLogin(authUsername, authPassword);
//     //           }));
//     //       }

//     // setHeaders(authUsername: String, authPassword: String): string | string[] {
//     //     //throw new Error("Method not implemented.");
//     //     return 'Basic ' + window.btoa(authUsername + ":" + authPassword)
//     // }

// //}





// //     getAuthenticationToken() {
// //         throw new Error("Method not implemented.");
// //     }
// //   authUsername: String;
// //   authPassword: String;

// // constructor(private http: HttpClient) {}

// //   authenticationService(authUsername: String, authPassword: String) {
// //     return this.http.get(url,
// //       { headers: { authorization: this.createBasicAuthToken(authUsername, authPassword) } }).pipe(map((res) => {
// //         this.authUsername = authPassword;
// //         this.authPassword = authPassword;
// //         this.registerSuccessfulLogin(authUsername, authPassword);
// //       }));
// //   }

// //   createBasicAuthToken(authUsername: String, authPassword: String) {
// //     return 'Basic ' + window.btoa(authUsername + ":" + authPassword)
// //   }

// //   registerSuccessfulLogin(authUsername, authPassword) {
// //     sessionStorage.setItem("authUsername",authUsername);
// //     sessionStorage.setItem("authPassword",authPassword);
// //   }
// //   logout() {
// //         sessionStorage.removeItem("authPassword");
// //         sessionStorage.removeItem("authUsername");
// //       }

// //   isUserLoggedIn() {
// //     let user = sessionStorage.getItem("authUsername")
// //     if (user === null) return false
// //     return true
// //   }

// // //   getLoggedInUserName() {
// // //     let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
// // //     if (user === null) return ''
// // //     return user
// // //   }
// // }authenticate(authUsername : string, authPassword : string) {
// // //     // create a security token
// // //     let authenticationToken = "Basic " + window.btoa(authUsername + ":" + authPassword );
// // //     console.log(authenticationToken);
// // //     let headers = new HttpHeaders({
// // //       Authorization: authenticationToken
// // //     });
// // //     console.log("calling se

// // //   rver")
// // //     // send the request
// // //     return this.http.get(url, { headers }).pipe(
// // //       // success function
// // //       map((successData:Registration) => {
// // //         console.log("success ")
// // //         sessionStorage.setItem("username", userName);
// // //         // save the token
// // //         sessionStorage.setItem("token", authenticationToken);
// // //         sessionStorage.setItem("user", successData.user === "ROLE_GOVERNMENT"? "govt" : "doctor");
// // //         sessionStorage.setItem("userId",successData.id.toString());
// // //         console.log(successData);
// // //         return successData;
// // //       }),
// // //       // failure function
// // //       map(failureData => {
// // //         // console message 
// // //         console.log("failure")
// // //         return failureData;
// // //       })
// // //     );
// // //  }
// // //   getAuthenticationToken() {
// // //     if (this.isUserLoggedIn())
// // //       return sessionStorage.getItem("token");
// // //     return null;
// // //   }
// // //   isUserLoggedIn(): boolean {
// // //     let user = sessionStorage.getItem('username');
// // //     if (user == null)
// // //       return false;
// // //     return true;
// // //   }
// // //   logout() {
// // //     sessionStorage.removeItem('username');
// // //     sessionStorage.removeItem("token")
// // //     sessionStorage.removeItem("userId")
// // //   }
// // // }


