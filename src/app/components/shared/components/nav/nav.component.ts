import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'nav-component',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  @Input() navItems: { label: string, link: string, classes?: string }[] = [];
  @Input() ariaLabel!: string;
  @Input() ulClasses!: string;
}
