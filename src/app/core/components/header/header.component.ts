import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input({required: true}) userImg: string = '';
  navList = ["Home", "TV Shows", "News & Popular", "My List", "Browse by Language"]
}
