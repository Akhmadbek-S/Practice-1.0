"use strict";

let numberOfFilms = prompt("How many movies did you already watch?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let oneOfWatched = prompt("What is one of your last watched movies?", "");
let rating = prompt("How would you rate it?", "");

personalMovieDB[movies] = oneOfWatched;

console.log(personalMovieDB);