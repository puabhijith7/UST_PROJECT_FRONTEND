import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemoServiceService } from '../demo-service.service';
import { User} from '../User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email:string='';
  name:string= '';
  password:string='';
      
  str!:string
   user1!:User
  errormsg!: string;
  
    constructor(private service:DemoServiceService,private router: Router) { 
      this.errormsg=''
    }
    signup(){
      this.errormsg=''
      const user = new User(this.name,this.email,this.password);
      console.log(user)
      this.service.signupok(user) .subscribe(
        (response:any) => {
          // this.errormsg=''
          // this.str= response as string
          console.log(response);
          alert("User created")
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
          this.errormsg="UserName already exist..!!"
          
        }
        
        
        );
        
        
       // alert("Account Created")
      }
      
}
