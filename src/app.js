import {Movie} from './movie/movie';
import {inject} from 'aurelia-framework';
import {MovieService} from './movie/movieService';

//@inject(MovieService)
export class App {
  static inject() { return [MovieService]}
  constructor(MovieService) {
    this.heading = 'Movies';
    this.movies = [];
    this.movieTitle = '';
    this.movieService = MovieService;
  }
  addMovie() {
    if(this.movieTitle){
      this.movie.push(new Movie(this.movieTitle));
      this.movieTitle = '';
    }
  }
  removeMovie(todo) {
    let index = this.movies.indexOf(todo);
    if(index !== 1) {
      this.movies.splice(index, 1);
    }
  }

  fill() {
    console.log('fill...');
    this.movieService.fill();
  }
}
