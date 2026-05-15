import { Component, signal } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularTrainingProject');
  
  // 1. Property initialized to 0
  count : number = 0;
  // 2. Method to increase count by 1
  increment() {
    this.count++;
  }
  name : string = ""


  stevilke : number[]= [1, 2, 3, 4, 5];
  
}
