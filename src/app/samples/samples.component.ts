import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-samples',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './samples.component.html',
  styleUrl: './samples.component.css'
})
export class SamplesComponent implements OnInit {
  images = [
    '../../assets/seasonMedic1.png',
    '../../assets/SeasonMedic2.png',
    '../../assets/SeasonMedic3.png'
  ];
  currentImageIndex = 0;

  currentSlide = 0;
  slides = [0, 1, 2]; // 3 slides

  ngOnInit() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 3000);
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide > 0) ? this.currentSlide - 1 : this.slides.length - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide < this.slides.length - 1) ? this.currentSlide + 1 : 0;
  }
}
