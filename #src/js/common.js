document.addEventListener('DOMContentLoaded', () => { //start
	console.log('loaded');

	

	$(window).scroll(function() { 
		if ($(window).scrollTop() > 320) {
			$('.up-arr').fadeIn(100);
			$('.header').addClass('header-active');
		} else {
			$('.up-arr').fadeOut(100);
			$('.header').removeClass('header-active');

		}
	});

	const mob = document.querySelectorAll('.mob'),
				pc = document.querySelectorAll('.pc');

	if (mob.length > 0 && pc.length > 0) {
		if (window.screen.width <= 1670) {
			pc.forEach((e) => {
				e.remove();
			})
		} else {
			mob.forEach((e) => {
				e.remove();
			})
		}
	}

	if (window.screen.width >= 1670) {
		$('.about-wrap').slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 300,
			lazyLoad: 'progressive',
			slidesToShow: 4,
			slidesToScroll: 1
		});
	}

	if (window.screen.width <= 992) {
		$('.burger').on('click', function () { 
			$(this).toggleClass('burger-active');
			$('.header-nav').slideToggle(200);
			$('body').toggleClass('noscroll');
			$('html').toggleClass('noscroll');
		});
		 

		 const costRight = document.querySelector('.cost-right');

		 if (costRight) {
			 costRight.remove();
		 }


		 const br = document.querySelectorAll('.features-wrap-left-item br');

		 if (br.length > 0) {
			br.forEach((e) => {
				e.remove();
			});
		 }
	}

	if (window.screen.width <= 578) {
		$('.works-moar').on('click', function () {
			$(this).fadeOut(100);
			$('.works-wrap-item').slideDown(200);
		})
	}


	$('.feed-toggle').on('click', function () {
		$('.feed-wrap-item').slideDown(200);
		$('.feed-overlay').slideUp(200);
		$(this).fadeOut(100);
	});


  
  






	$('.overlay').on('click', function() {
		$('.popup').fadeOut(300);
		$(this).fadeOut(300);
	});
	$('.close').on('click', function() {
		$('.popup').fadeOut(300);
		$('.overlay').fadeOut(300);
	});

	

	const links = document.querySelectorAll('a');

	if (links) {
		links.forEach((elem) => {
			if (elem.href.indexOf('#') != -1) {
				elem.classList.add('click');
			}
		});
	}

	$(".click").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - 00;
		$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
		return false;
	});

	const selects = document.querySelectorAll('select');
	if (selects) {
		selects.forEach((elem) => {
				elem.parentElement.classList.add('select-wrapper');
		});
	} //end selects forEach / Добавление стрелочки к обертке select

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
}); // img >> webp html








}); //end