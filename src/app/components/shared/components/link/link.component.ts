import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-link',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input() label: string = "Link";
  @Input() route!: string;
  @Input() class!: string;

  constructor(private router: Router) { }

  navigate() {
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }
}
