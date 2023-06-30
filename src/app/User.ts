export class User{
    name:string=''
    email:string=''
    password:string=''
    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
      }
    
}
export class Userlogin{
  username:string=''
  password:string=''
  constructor(username:string,password:string){
    this.username=username;
    this.password=password;
  }
}