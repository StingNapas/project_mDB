/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener("DOMContentLoaded", () => {
	const movieDB = {
			movies: [
					"Логан",
					"Лига справедливости",
					"Ла-ла лэнд",
					"Одержимость",
					"Скотт Пилигрим против..."
			]
	};
	/* ************************		ПРАКТИКА СО СТРАНИЦЕЙ №1	************************** */
	const promoAdv = document.querySelectorAll(".promo__adv img"),
				promoGenre = document.getElementsByClassName("promo__genre"),
				promoBg = document.getElementsByClassName("promo__bg"),
				promoList = document.querySelector(".promo__interactive-list");

	function startChange(){
		promoGenre[0].textContent = "драма";
		promoBg[0].style.backgroundImage = "url('img/bg.jpg')";
	}

	function deleteAdv(){
		promoAdv.forEach(element => {
			element.remove();
		});
	}
	/* ********************************************************************************** */

	/* ************************		ПРАКТИКА СО СТРАНИЦЕЙ №2 (СОБЫТИЯ) */

	const formAdd = document.querySelector("form.add"),
				btnAdd = formAdd.querySelector("button"),
				inputCheck = formAdd.querySelector("input[type='checkbox']"),
				inputText = formAdd.querySelector("input[type='text']");

	btnAdd.addEventListener("click", (event) => {
		event.preventDefault();

		if (inputText.value.length > 21){
			inputText.value = inputText.value.slice(0,21) + "...";
		}

		if (inputCheck.checked){
			console.log("Добавляем любимый фильм");
		}

		if (inputText.value){
			movieDB.movies.push(inputText.value);
			createList(movieDB.movies, promoList);
			formAdd.reset();
		}

	});

	function createList(arrAdd, parent){
		parent.innerHTML = "";
		arrAdd.sort();
		arrAdd.forEach((film, index) => {
			parent.innerHTML +=
						`<li class='promo__interactive-item'>${index + 1}. ${film}<div class='delete'></div></li>`;
		});

		parent.querySelectorAll(".delete").forEach((btn, index) => {
			btn.addEventListener("click", () => {
				movieDB.movies.splice(index, 1);
				createList(movieDB.movies, promoList);
			});
		});
	}

	startChange();
	deleteAdv();
	createList(movieDB.movies, promoList);

/* ********************************************************************************** */
});