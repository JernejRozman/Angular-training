import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularTrainingProject');
  
  // 1. Property initialized to 0
  count = 0;

  // 2. Method to increase count by 1
  increment() {
    this.count++;
  }
}
