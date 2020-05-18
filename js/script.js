/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1
const promoAdv = document.querySelectorAll(".promo__adv > img");
// console.dir(promoAdv);
// promoAdv.forEach(element => {
// 	element.remove();
// });

//2
const promoGenre = document.getElementsByClassName("promo__genre");
// promoGenre[0].innerHTML = "драма";
promoGenre[0].textContent = "драма";
// console.dir(promoGenre);

//3
const promoBg = document.getElementsByClassName("promo__bg");
// const promoBg = document.querySelectorAll(".promo__bg");
promoBg[0].style.backgroundImage = "url('img/bg.jpg')";

//4
const promoItems = document.querySelectorAll(".promo__interactive-item");
console.dir(promoItems);
promoItems.forEach(item => item.remove());

movieDB.movies.sort();
const promoList = document.querySelector(".promo__interactive-list");
let count = 1;
for (let i of movieDB.movies){
	promoList.innerHTML = promoList.innerHTML + `<li class='promo__interactive-item'>${count}. ${i}<div class='delete'></div></li>`;
	count++;
}