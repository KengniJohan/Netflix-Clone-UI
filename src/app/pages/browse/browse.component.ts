import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieService } from '../../shared/services/movie.service';
import { MovieCarouselComponent } from '../../shared/components/movie-carousel/movie-carousel.component';

@Component({
  selector: 'app-browse',
  imports: [
    CommonModule, 
    HeaderComponent, 
    BannerComponent,
    MovieCarouselComponent
  ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowserComponent implements OnInit {
  movieService = inject(MovieService);

  ngOnInit(): void {
    this.movieService.getMovies()
      .subscribe(res => {
        console.log(res);
      })
  }
}
