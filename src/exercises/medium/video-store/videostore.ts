export class Video {
  name: string;
  rating: number;
  isRented: boolean;
  user: null;
  constructor(name: string, rating: number) {
    (this.name = name),
      (this.rating = rating),
      (this.isRented = false),
      (this.user = null);
  }

  get print() {
    return this.name;
  }

  rent(user: null) {
    this.user = user;
    this.isRented = true;
  }
  // get isRented(){
  //     return this.user !== null
  // }
  // set isRented(rented){
  //     this.isRented = false;
  // }

  return() {
    this.user = null;
    this.isRented = false;
  }
}

export class VideoStore {
  movies: [];
  constructor() {
    this.movies = [];
  }

  addMovie(name: string, rating: number) {
    this.movies.push(new Video(name, rating));
  }

  printAvailable() {
    return this.movies
      .filter(m => m.isRented === false)
      .map(m => m.print)
      .join(", ");
  }

  printRented(user: string){
      return this.movies
      .filter(m => (m.user === user))
      .map(m => m.print)
      .join(", ");
  }

  printContentAll() {
    return this.movies.map(m => m.print).join(", ");
  }

  getAvailable() {
    return this.movies
      .filter(movie => movie.isRented === false)
      .map(movie => ({ name: movie.name, value: movie }));
  }

  getRented(user: string) {
    return this.movies
      .filter(movie => movie.user === user)
      .map(movie => ({ name: movie.name, value: movie }));
  }

  rentMovies(movies: [], user: string) {
    for (const movie of movies) {
      movie.rent(user);
    }
  }

  returnMovies(movies: { return: () => void } | undefined) {
    if (movies == undefined) {
      return;
    } else {
      movies.return();
    }
  }
}

export class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

exports.Video = Video;
exports.VideoStore = VideoStore;
exports.User = User;