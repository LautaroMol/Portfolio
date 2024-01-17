import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

  faAngular = faAngular;
  faDatabase = faDatabase;
  faGithub = faGithub;
  faGit = faGit;
  faBootstrap = faBootstrap;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faJs = faJs;
}
