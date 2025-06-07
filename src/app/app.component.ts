import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Form, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
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
  public colors = ["red","blue","orange","black","white"];
  public pickedColor = "black";
  
}
