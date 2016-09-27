import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';

//@inject(HttpClient)
export class MovieService {
  static inject() { return [HttpClient]}
  constructor(HttpClient) {
    this.httpClient = HttpClient;
  }

  fill() {
    this.httpClient.get('../../../data.json')
      .then(data => {
        console.debug(data.movies)
      });
  }
}
