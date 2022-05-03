let numberOfFilms = +prompt ('How many movies have you already watched?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false

};

const a = prompt('One of the last movies you watched?', ''),
      b = prompt ('How would you value it?', ''),
      c = prompt('One of the last movies you watched?', ''),
      d = prompt ('How would you value it?', '');

personalMovieDB.movies [a] = b;
personalMovieDB.movies [c] = d;

console.log(personalMovieDB);
