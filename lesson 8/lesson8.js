'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const answerOne = prompt('Один из последних просмотренных фильмов?', '');
const answerTwo = prompt('На сколько оцените его', '');
const answerThree = prompt('Один из последних просмотренных фильмов?', '');
const answerFour = prompt('На сколько оцените его', '');

personalMovieDB.movies[answerOne] = answerTwo;
personalMovieDB.movies[answerThree]= answerFour;

console.log(personalMovieDB);


