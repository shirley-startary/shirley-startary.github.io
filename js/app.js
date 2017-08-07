// // 'use strict';
// var lastScrollTop=0;
// window.addEventListener("scroll",function () {
//   var currentScroll = window.pageYOffset || document.body.scrollTop;
//   // console.log(currentScroll);
//   if(currentScroll>lastScrollTop){
//     document.getElementById("nav-bar")
//     console.log("down");
//   }else{
//     console.log("up");
//   }
//   lastScrollTop=currentScroll;
//
// },false)
// // console.clear();

var app = function () {
	var body = undefined;
	var menu = undefined;
	var menuItems = undefined;

	var init = function init() {
		body = document.querySelector('body')
		menu = document.querySelector('.menu-icon');
		menuItems = document.querySelectorAll('.nav__list-item');
		applyListeners();
	};

	var applyListeners = function applyListeners() {
		menu.addEventListener('click', function () {
			return toggleClass(body, 'nav-active');
		});
	};

	var toggleClass = function toggleClass(element, stringClass) {
		if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
	};

	init();
}();
