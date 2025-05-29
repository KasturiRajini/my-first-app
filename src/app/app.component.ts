import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Form, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rajini';
  message = "";
 
  userentered = "";
  
  onClick(){
    
    console.log("Welcome "+this.userentered);
  }
  
}
