import { Component } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  topics= ['angular','react','vue'];
  userModel = new User('sia' , 'sia@gmail.com' , 999999999  , '' , 'morning' , true);
  title = 'forms';
}
