'use strict';

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
   const: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const one = prompt('Один из последних просмотренных фильмов?', '');
const two = prompt('На сколько оцените его?', '');
const three = prompt('На сколько оцените его?', '');
const four = prompt('На сколько оцените его?', '');


personalMovieDB.movies[one] = two;
personalMovieDB.movies[three] = four;

console.log(personalMovieDB);
