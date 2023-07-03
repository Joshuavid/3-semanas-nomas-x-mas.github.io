/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(function () {

	// Vars.
	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper');

	let musica = document.getElementById('musica');
	let reproducirBtn = document.getElementById('reproducir');
	let pausarBtn = document.getElementById('pausar');

	reproducirBtn.addEventListener('click', function () {
		musica.play();
	});

	pausarBtn.addEventListener('click', function () {
		musica.pause();
	});


	$(function () {
		$('#mostrarBtn').on('click', function () {
			var palabraClave = $('#palabraClaveInput').val();

			// Realiza la validación de la palabra clave aquí
			if (palabraClave.toLowerCase() === 'odalyz') {
				// Perfil
				$('#miSeccionHead').removeClass('d-none');

				// texto 
				$("#home-text").addClass('d-none');
				$("#identificate").text("Hola bonita, No son rosas o flores buchonas pero la intencion de dar es la misma");

				// Seccion(Contenido, btns y inp)
				$('#miSeccion').removeClass('d-none');
				$('#mostrarBtn').addClass('d-none');
				$('#regresarBtn').removeClass('d-none');
				$('#palabraClaveInput').addClass('d-none');
				$('#hunter-o-evangelion').removeClass('d-none');
			}
		});

		$('#regresarBtn').on('click', function () {
			// Perfil
			$('#miSeccionHead').addClass('d-none');

			// texto
			$("#home-text").removeClass('d-none');
			$("#identificate").text("Identifijate");

			// Seccion(Contenido, btns y inp)
			$('#miSeccion').addClass('d-none');
			$('#regresarBtn').addClass('d-none');
			$('#mostrarBtn').removeClass('d-none');
			$('#palabraClaveInput').removeClass('d-none');
			$('#hunter-o-evangelion').addClass('d-none');
		});
	});


	// Breakpoints.
	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	// Disable animations/transitions until everything's loaded.
	$body.addClass('is-loading');

	$window.on('load', function () {
		$body.removeClass('is-loading');
	});

	// Poptrox.
	$window.on('load', function () {

		$('.thumbnails').poptrox({
			onPopupClose: function () { $body.removeClass('is-covered'); },
			onPopupOpen: function () { $body.addClass('is-covered'); },
			baseZIndex: 10001,
			useBodyOverflow: false,
			usePopupEasyClose: true,
			overlayColor: '#000000',
			overlayOpacity: 0.75,
			popupLoaderText: '',
			fadeSpeed: 500,
			usePopupDefaultStyling: false,
			windowMargin: (skel.breakpoint('small').active ? 5 : 50)
		});

	});

});