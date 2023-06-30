import { Component } from '@angular/core';
import { AuthService } from '../AuthService';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component {
  constructor(private s:AuthService){}
  unsettoken()
  {
   this.s.setToken('')
  }

}
