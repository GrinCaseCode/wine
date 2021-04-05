$(document).ready(function() {

//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}

});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	$menu.removeClass("fixed").addClass("default");
}

jQuery('.quantity').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

	});

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");

		
	});

	$(".btn_nav_menu").click(function() {
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
		} else {
			$(".menu-mobile").slideUp(200);
		}
		
	});

	$(".menu-mobile a").click(function() {
		$(".menu-mobile").slideUp(200);
		$(".sandwich").removeClass("active");
	});

	$(".btn_nav_catalog").click(function() {
		if ($(".menu-catalog").is(":hidden")) {
			$(".menu-catalog").slideDown(200);
		} else {
			$(".menu-catalog").slideUp(200);
		}
		
	});

	$(".menu-catalog a").click(function() {
		$(".menu-catalog").slideUp(200);
		$(".sandwich").removeClass("active");
	});

		$(".btn-catalog-mobile, .btn-catalog-bottom").click(function() {
		if ($(".menu-catalog").is(":hidden")) {
			$(".menu-catalog").slideDown(200);
		} else {
			$(".menu-catalog").slideUp(200);
		}
		
	});

		$(".menu-catalog__close").click(function() {
		$(".menu-catalog").slideUp(200);
	});



	$(".location-value").click(function() {
		$(".location-block__list").slideToggle(200);
	});

	$(".location-block__list a").click(function() {
		$(".location-block__list").slideUp(200);
	});


	$(".item-filter__head").click(function() {
		$(this).parent().parent().toggleClass("active");
		$(this).siblings(".item-filter__content").slideToggle(200);
	});

	$(".sidebar-open").click(function() {
		$(".sidebar-catalog").slideToggle(200);
	});


	/*range slider*/

	$(function() {
var $range = $(".range-catalog_price .range-catalog__input"),
$from = $(".range-catalog_price .control-input__from"),
$to = $(".range-catalog_price .control-input__to"),
min = 0,
max = 25000;
$range.ionRangeSlider({
	type: "double",
	min: min,
	max: max,
	from: 5000,
	to: 14000,
	prettify_enabled: true,
	onChange: function(data) {
		updateValues()
	}
});


$range = $range.data("ionRangeSlider");
var updateValues = function() {
	var res = $range.result;
	$from.val(res.from, true);
	$to.val(res.to,true)
};
$from.on("focus", function() {
	this.value = this.value;
	this.focus();
	this.selectionStart = this.value.length
}).on("input", function() {
	$range.update({
		from: this.value
	})
}).on("blur", updateValues);
$to.on("focus", function() {
	this.value = this.value;
	this.focus();
	this.selectionStart = this.value.length
}).on("input", function() {
	$range.update({
		to: this.value
	})
}).on("blur", updateValues)
});

		$(function() {
var $range = $(".range-catalog_strength .range-catalog__input"),
$from = $(".range-catalog_strength .control-input__from"),
$to = $(".range-catalog_strength .control-input__to"),
min = 0,
max = 21;
$range.ionRangeSlider({
	type: "double",
	min: min,
	max: max,
	from: 0,
	to: 21,
	prettify_enabled: true,
	onChange: function(data) {
		updateValues()
	}
});


$range = $range.data("ionRangeSlider");
var updateValues = function() {
	var res = $range.result;
	$from.val(res.from, true);
	$to.val(res.to,true)
};
$from.on("focus", function() {
	this.value = this.value;
	this.focus();
	this.selectionStart = this.value.length
}).on("input", function() {
	$range.update({
		from: this.value
	})
}).on("blur", updateValues);
$to.on("focus", function() {
	this.value = this.value;
	this.focus();
	this.selectionStart = this.value.length
}).on("input", function() {
	$range.update({
		to: this.value
	})
}).on("blur", updateValues)

});
$(".footer__title").click(function() {
		$(this).toggleClass("active");
		$(this).siblings(".footer__content").slideToggle(200);
	});
	//слайдер

	$('.slider-billbord').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
	});


	$('.slider-products').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				arrows: false,
				dots: true,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				arrows: false,
				dots: true,
			}
		}
		]
	});

	$('.tabs a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find(".tabs__item").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".tab-container").find(".tab-pane").removeClass("active");
		var selectTab = $(this).attr("href");
		$(selectTab).addClass("active");
	});

	$('.tabs-card a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".tab-container-card").find(".tab-pane-card").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
	});

	$(".availability-unit__head").click(function(e) {
		e.preventDefault();
		$(".availability-unit").removeClass("active");
		$(".availability-unit__content").slideUp(200);
		if ($(this).siblings(".availability-unit__content").is(":hidden")) {
			$(this).parent().addClass("active");
			$(this).siblings(".availability-unit__content").slideDown(200);

		} else {
			$(this).parent().removeClass("active");
			$(this).siblings(".availability-unit__content").slideUp(200);

		}
	});

	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

