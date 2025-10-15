import { Component, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCirclePlay, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [FontAwesomeModule, CommonModule]
})
export class SidebarComponent {
  isAudioPlaying: boolean = false;
  audio: any;
  isMobile: boolean = false;
  sidebarVisible: boolean = false;

  faCirclePlay = faCirclePlay;
  faBars = faBars;
  faTimes = faTimes;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.audio = new Audio('../../assets/background_Music.mp3');
      this.checkWindowSize();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  scrollToSection(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      if (this.isMobile) {
        this.sidebarVisible = false;
      }
    }
  }

  play() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isAudioPlaying) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
      this.isAudioPlaying = !this.isAudioPlaying;
    }
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
