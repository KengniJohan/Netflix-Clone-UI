import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-movie-carousel',
  imports: [CommonModule],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.css',
  standalone: true
})

export class MovieCarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer?: ElementRef
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  private initSwiper() {
    return new Swiper(this.swiperContainer?.nativeElement, {
      slidesPerView: 3,
      slidesPerGroup: 2,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        600: {
          slidesPerView: 3,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1500: {
          slidesPerView: 3,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1800: {
          slidesPerView: 3,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
      },
    });
  }

}
