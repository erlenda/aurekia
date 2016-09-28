
export class MovieService {
  constructor() {
    $.get('data.json').then(data => {
      this.secret = data.secret;
    });
  }

  getSecret() {
    return this.secret;
  }

  fill() {
    return $.get('data.json')
      .then(data => {
        return data.movies.map((movie)=> {
          return $.get("http://www.omdbapi.com/?i="+movie.imdbid+"&y=&plot=short&r=json&apikey="+this.secret)
            .then(movieResult => {
              return movieResult;
            });
        });
      });
  }
}
