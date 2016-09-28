import {Movie} from './movie/movie';
import {inject} from 'aurelia-framework';
import {MovieService} from './movie/movieService';

export class App {

  static inject() { return [MovieService]}

  constructor(MovieService) {
    this.heading = 'Movies';
    this.movies = [];
    this.movieTitle = '';
    this.year = 0;
    this.movieService = MovieService;
  }

  addMovie() {
    if(this.movieTitle && this.year){
      this.movies.push(new Movie(this.movieTitle, this.year));
      this.movieTitle = '';
      this.year = 0;
    }
  }

  addMovieExtra(movie) {
    let newMovie = new Movie(movie.Title, movie.Year);
    newMovie.setExtras(movie, this.movieService.getSecret());
    this.movies.push(newMovie);
  }

  removeMovie(todo) {
    let index = this.movies.indexOf(todo);
    if(index !== 1) {
      this.movies.splice(index, 1);
    }
  }

  fill() {
    let movieArr = this.movieService.fill();
    movieArr.then(result => {
      result.map(movie => {
        movie.then(movie => {
          this.addMovieExtra(movie);
        });
      });
    });
  }
}
