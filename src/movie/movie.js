export class Movie {
  constructor(title, year) {
    this.title = title;
    this.done = false;
    this.year = year;
    this.poster = '';
    this.secret = '';
  }

  setExtras(movie, secret) {

    if(movie.Year) {
      this.year = movie.Year;
    }

    if(movie.Poster) {
      this.poster = `${movie.Poster}?apiKey=${secret}`;
    }
  }
}
