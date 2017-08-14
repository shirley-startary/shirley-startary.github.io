	var body;
	var menu;
	var menuItems;

var init = function () {
	body = document.querySelector('body');
	menu = document.querySelector('.menu-icon');
	menuItems = document.querySelectorAll('.nav__list-item');
	$('.block').smoove({offset:'50%'});
	// $('#habilidades').scrollTop(idIterval)
	applyListeners();
}

var activator = function () {
	return toggleClass(body, 'nav-active');
}

var applyListeners = function() {
	menu.addEventListener('click',activator);
	for (var i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener('click',activator);
	}

}

var toggleClass = function (element, stringClass) {
	if(element.classList.contains(stringClass))
		element.classList.remove(stringClass);
	else
		element.classList.add(stringClass);
}

var progreso = 0;
onscroll=function(){
    var yScroll=self.pageYOffset || (document.documentElement.scrollTop+document.body.scrollTop);
		console.log(yScroll);
		if(yScroll >= 600){
			idIterval();
		}
}

var idIterval = function () {
	setTimeout(function(){
		$('.barra').each(function(){

			var $elemento = $(this);
			var $value = $(this).data('value');
			progreso =$value;
			// if(progreso = $value){
			// 	clearInterval(idIterval);
			// }
			$elemento.css('width', progreso + '%');
		});
	},1000);
}

init();
