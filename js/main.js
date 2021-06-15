$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,

	});
})	

const bodycatalog = document.querySelector('.header__body-catalog');
if (bodycatalog) {
	bodycatalog.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		bodycatalog.classList.toggle('active');
	});
}
