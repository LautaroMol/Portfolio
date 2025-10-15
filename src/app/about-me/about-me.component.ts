import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faDocker, faLinux, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer, faMobileAlt, faCode, faPalette } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  faDatabase = faDatabase;
  faCode = faCode;
  faMicrosoft = faMicrosoft;
  faAngular = faAngular;
  faMobileAlt = faMobileAlt;
  faPalette = faPalette; // Using faPalette for Tailwind, as a design-related icon
  faLinux = faLinux;
  faDocker = faDocker;
  faServer = faServer;

}
