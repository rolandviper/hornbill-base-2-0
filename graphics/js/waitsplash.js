import { gsap, Power0 } from '../../node_modules/gsap/index.js';
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
		var logo = $('.logo').css('opacity', 0);

		const lower = $('.lower').css('opacity', 0);
		const title = document.getElementById('title');
		const sub = document.getElementById('sub');

		nodecg.listenFor('startsplash', (data) => {
			title.innerHTML = data.title;
			sub.innerHTML = data.sub;

			tl.staggerTo(objs, speed, { y: dist, autoAlpha: 1, x: dist }, offset);
			tl.to(logo, { duration: 1, autoAlpha: 1, ease: 'power1.in' }, '-=1');
			tl.to(lower, { duration: 1, autoAlpha: 1 });
			tl.from([ title, sub ], { duration: 1, width: 0, autoAlpha: 0 });
		});

		nodecg.listenFor('stopsplash', () => {
			tl.to(lower, { duration: 1, autoAlpha: 0 });
			tl.to(logo, { duration: 1, autoAlpha: 0 }, '-=1');
			tl.staggerTo(objs, speed, { y: dist, autoAlpha: 0, x: dist }, -offset);

			tl.call(() => {
				title.innerHTML = '';
				sub.innerHTML = '';
			});
		});

		nodecg.listenFor('updatesplash', async (data) => {
			tl.to(lower, { duration: 1, autoAlpha: 0 });
			await tl.set([ lower, title, sub ], { width: '', opacity: '' });

			title.innerHTML = data.title;
			sub.innerHTML = data.sub;

			tl.to(lower, { duration: 1, autoAlpha: 1 });
		});
	});
});
