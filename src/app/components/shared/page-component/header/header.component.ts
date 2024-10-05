import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() logoImageUrl: string = 'assets/logo/logo.svg';
  @Input() logoImageAltText: string = 'logo da marca';
}
