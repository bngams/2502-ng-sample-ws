import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/layout/header/header.component";

@Component({
  standalone: true, // implicit
  selector: 'fo-root',
  imports: [RouterOutlet, HeaderComponent], // a standalone can import features from modules
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // providers: ...
})
export class AppComponent {
  title = 'fo';
}
