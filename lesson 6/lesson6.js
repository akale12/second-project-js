"use strict";

console.log('arr' + ' - object');
console.log(4 +'5');

let incr = 10,
    decr = 10;

// ++incr;
// --decr;

console.log(incr++);
console.log(decr--);

console.log(5%2);

console.log(2 + 2 * 2 == '6');


// && 
// ||


const isChecked = false,
       isClose = false;

console.log(isChecked || !isClose);



const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstQuestion = prompt('Один из последних просмотренных фильмов?', '');
const secondQuestion = prompt('На сколько оцените его?' , '');
const thirdQuestion = prompt('Один из последних просмотренных фильмов?', '');
const fourthQuestion = prompt('На сколько оцените его?' , '');

personalMovieDB.movies[fourthQuestion] = secondQuestion;
personalMovieDB.movies[thirdQuestion] = fourthQuestion;

console.log(personalMovieDB);