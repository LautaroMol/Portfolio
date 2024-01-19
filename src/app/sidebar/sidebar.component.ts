import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [FontAwesomeModule]
})
export class SidebarComponent {
  isAudioPlaying: boolean = false;
  audio: HTMLAudioElement = new Audio('../../assets/background_Music.mp3');

  faCirclePlay = faCirclePlay
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  play() {
    if (this.isAudioPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isAudioPlaying = !this.isAudioPlaying;
  }
}
