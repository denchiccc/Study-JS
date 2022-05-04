/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// ! 1 block
/*const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */
// ! 2 block
/* if (5==7) {
    console.log('Ok');
} else {
    console.log('Error');
} */
// ! 3 block

/* const num = 50;

switch (num) {
    case 49:
        console.log('False');
        break;
    case 100:
        console.log('False');
        break;
    case 88:
        console.log('False');
        break;
    case 51:
        console.log('True');
        break;
    default :
        console.log('Never');
        break;                
} */

// ! 4 block 

/* const hamburger = true,
      fries = true;

if (hamburger && fries) {
    console.log('Я сыт')
} */


/* const hamburger = 3,
      fries = 1,
      cola = 1;

      console.log(hamburger === 3 && cola && fries);

if (hamburger === 3 && cola === 1 && fries) {
    console.log('Все сыты')
} else {
    console.log('Мы уходим')
} */

/* const hamburger = 3,
      fries = 2,
      cola = 2,
      naggets = 1;

      console.log(hamburger === 2 && naggets === 2 || cola === 2 && fries)

if (hamburger === 2 && naggets === 2 || cola === 2 && fries === 2) {
    console.log('Все сыты')
} else {
    console.log('Мы уходим')
}

let denisReport, ivanReport, sashaReport, genyReport = 'date';
    console.log(denisReport || ivanReport || sashaReport || genyReport);


console.log( NaN || 2 || undefined );    
console.log( NaN && 2 && undefined );    
console.log( 1 && 2 && 3 );    
console.log( !1 && 2 || !3 );    
console.log( 25 || null && !3 );    
console.log( NaN || null || !3 || undefined || 5);    
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);
 */


/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
} */

let num = 50;
