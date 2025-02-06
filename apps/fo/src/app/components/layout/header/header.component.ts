import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'fo-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // TODO: create a type or interface
  menuItems = [
    { title: 'Home', path: '/home' },
    { title: 'About', path: '/about' },
    { title: 'Catalog', path: '/catalog' }
  ]
}
