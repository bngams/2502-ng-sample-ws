import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true, // implicit
  selector: 'fo-root',
  imports: [RouterOutlet, UpperCasePipe], // a standalone can import features from modules
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // providers: ...
})
export class AppComponent {
  title = 'fo';
}
