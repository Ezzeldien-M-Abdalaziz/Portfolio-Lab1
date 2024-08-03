import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.css'
})
export class PortfolioSectionComponent {
  projects:string[] = [
    'mapty application',
    'Fashe Ecommerce',
    'Guess-The-Word Game',
    'Bankist',
    'Kasper-Template',
    'Leon-Agency-Template',
  ];
}
