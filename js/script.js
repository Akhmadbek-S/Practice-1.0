"use strict";

const numberOfFilms = +prompt("How many movies did you already watch?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("What is one of your last watched movies?", ""),
      b = +prompt("How would you rate it?", ""),
      c = prompt("What is one of your last watched movies?", ""),
      d = +prompt("How would you rate it?", "");
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);