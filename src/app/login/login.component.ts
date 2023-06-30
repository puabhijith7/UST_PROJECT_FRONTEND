import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../AuthService';
import { DemoServiceService } from '../demo-service.service';
import { Userlogin } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  username:string='';
  password:string=''; 
  user!:Userlogin
  errormsg!: string;
  nameError!: string;
  passError!: string;
constructor(private service:DemoServiceService,private router: Router,private s:AuthService) { }
  login()
  {
    this.errormsg=''
    this.nameError=''
    this.passError=''

    if (!this.username) {

      this.nameError = 'Please enter a name';

      return;

    }
    if (!this.password) {

      this.passError = 'Please enter a password';

      return;

    }


    const user = new Userlogin(this.username,this.password);
    console.log(user)
    this.service.loginok(user) .subscribe(
      (response) => {
        
        // this.str= response as string
        console.log(response);
        this.s.setToken(response);
        // this.service.token=response
        this.router.navigate(['/search']);
      },
      (error) => {
        console.log(error);
        this.errormsg="Bad Credentials..!!"
        
      }
      
      
      );

}

}
