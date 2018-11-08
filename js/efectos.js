$(document).ready(function(){
	$('.menu a').each(function(index, el) {
		$(this).css({
			top: '-200',
			
		});
	});



// Scroll Elementos Menu
	var horarios = $('#horarios').offset().top,
		soluciones = $('#soluciones').offset().top,
		inicio= $('#main').offset().top,
		contacto = $('#contacto').offset().top;

	$('#btn-inicio').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: inicio -200
		}, 500);
	});

	$('#btn-horarios').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: horarios -200
		}, 500);
	});

	$('#btn-soluciones').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: soluciones -150
		}, 500);
	});

	$('#btn-contacto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto -120
		}, 500);
	});

});