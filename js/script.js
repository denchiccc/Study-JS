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

/* let num = 50;
const num1 = 60;
 */
/* while (num < 55) {
    console.log(num),
    num++;
}; */

/* do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++ ) {
    if (i === 5) {
        // break
        continue
    }
    console.log(i);
}

/* let result = '';
const length = 9;
for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n'; 
}   
    console.log(result); */

/* first: for (let i = 0; i < 3; i++) {
    console.log('first level:', i);
    for (let j = 0; j < 3; j++) {
        console.log('second level:', j);
        for (let k = 0; k < 3; k++) {
             if (k === 2) break first;
            console.log('third level:', k);
        }    
    }
}    

for (let i = 2; i < 11; i++) {
    if (i % 2 === 0){
        console.log(i);
    } 
}

let num2 = 5;
while (num2 <= 10) {
    console.log(num2),
    num2++;
}

do {
    console.log(num2),
    num2++;  
}
while (num2 <= 10);

for (let i = 2; i <= 16; i++) {
     if (i % 2 === 0) {
             continue;
    } else {
         console.log(i);
         }
}

let x = 2;
while (x < 16) {
    x++;
    if (x % 2 != 0) {
        console.log(x);
    }
}

for (let i = 20; i > 9; i--) {
     if (i === 13){
        break
     } 
     console.log(i);
}

const arrayOfNumbers = [];

    for (let i = 1; i < 11; i++) {
        arrayOfNumbers[i - 1] = i;
    }

    console.log(arrayOfNumbers);


    
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)     */ 

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    films: {},
    genres: [],
    privat: false
};
for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('Ok')
    }  

    else {
        console.log('Error');
        i--;
    }
    
}

if (personalMovieDB.count <= 10){
    console.log("Просмотрено довольно мало фильмов");
    alert("Просмотрено довольно мало фильмов");
} 
else if (11 < personalMovieDB.count && personalMovieDB.count <= 30){
    console.log("Вы классический зритель");
    alert("Вы классический зритель");
}
else if (personalMovieDB.count > 30){
    console.log("Вы киноман");
    alert("Вы киноман");
} else {
    console.log("Произошла ошибка");
    alert("Произошла ошибка");
}

 /* for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних любимых актеров?', ''),
          b = prompt('На сколько баллов он тянет?', '');
      

    personalMovieDB.actors[a] = b; */
// }

let c = 1;
while (c < 3){
    const g = prompt('how are you', '');
    const f = prompt('what', '');
    personalMovieDB.films[g] = f;
    c++;
} 

console.log(personalMovieDB);
     