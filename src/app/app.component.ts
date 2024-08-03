import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionHeroComponent } from './section-hero/section-hero.component';
import { AboutSectionComponent } from "./about-section/about-section.component";
import { SkillsSectionComponent } from "./skills-section/skills-section.component";
import { PortfolioSectionComponent } from "./portfolio-section/portfolio-section.component";
import { FooterSectionComponent } from "./footer-section/footer-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SectionHeroComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    PortfolioSectionComponent,
    FooterSectionComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'protofolio';
}
