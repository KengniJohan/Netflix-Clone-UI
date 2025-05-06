import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

const options = {
    params: {
        include_adult: 'false',
        include_video: 'true',
        language: 'en-Us',
        page: '1',
        sort_by: 'popularity.desc',
    },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDI5MTIwNjRjYWJmZDM2Y2JiODFhOTcxN2VmMTZlZCIsIm5iZiI6MTc0NjUzMTMxMC4xOTcsInN1YiI6IjY4MTlmM2VlYmNhMTc4MTU3NDkzNDdmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xUIIfqykBC6UY8oOePyOxHLSWKALcBQs8i27_8SC6q8'
    }
}
@Injectable({
    providedIn: 'root'
})
export class MovieService {

    http = inject(HttpClient);

    getMovies() {
        return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options);
    }
}