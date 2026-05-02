import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content-navigation',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './content-navigation.component.html',
  styleUrl: './content-navigation.component.css',
})
export class ContentNavigationComponent {}
