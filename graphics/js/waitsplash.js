import { gsap } from '../../node_modules/gsap/index.js';
const tl = gsap.timeline();

$(document).ready(function() {
	$('.jalousie').each(function() {
		// Settings
		// how many slices
		var slices = parseInt($(this).attr('data-slices'));
		// how long should slice animate anmitaion
		var speed = parseFloat($(this).attr('data-speed'));
		// offset between slices to start animating
		var offset = parseFloat($(this).attr('data-offset'));
		// how far to move slices (+ down, - up)
		var dist = parseInt($(this).attr('data-dist'));

		// Manipultion
		var img = $(this).find('img');
		var width = img.width() / slices;
		var height = img.height();

		var w = 'width: ' + width + 'px;';
		var bi = 'background-image: url(' + img.attr('src') + ');';

		$(this).height(height);
		img.hide();

		for (var i = 0; i < slices; i++) {
			var l = 'left: ' + i * width + 'px;';
			var bp = 'background-position: -' + i * width + 'px 50%';
			var style = w + l + bi + bp;
			$(this).append('<span class="slice slice-' + i + '" style="' + style + '">');
		}

		var objs = $(this).find('.slice').css('opacity', 0);

		nodecg.listenFor('startsplash', (data) => {
			tl.staggerTo(objs, speed, { y: dist, autoAlpha: 1, x: dist }, offset);
		});

		nodecg.listenFor('stopsplash', () => {
			tl.staggerTo(objs, speed, { y: dist, autoAlpha: 0 }, -offset);
		});
	});
});
