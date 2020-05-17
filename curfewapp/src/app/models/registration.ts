export class Registration{
 userId:number;
 userName:string;
 firstName:string;
 lastName:string;
 email:string;
 phone:number;
 password:string;
 user:string;  

 constructor(userId:number, userName:string, firstName:string, lastName:string,email:string, phone:number,password:string,user:string){
    this.userId = userId;
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.user = user;
}
}