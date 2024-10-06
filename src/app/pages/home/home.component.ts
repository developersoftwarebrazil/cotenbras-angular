import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../components/shared/page-component/footer/footer.component';
import { HeaderComponent } from '../../components/shared/page-component/header/header.component';
import { IntroComponent } from '../../components/shared/page-component/intro/intro.component';

@Component({
  selector: 'home-component',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    IntroComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
