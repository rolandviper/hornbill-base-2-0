import { gsap } from '../../node_modules/gsap/index.js';
const tl = gsap.timeline();

const title = document.getElementById('title');
const sub = document.getElementById('sub');

const black = document.querySelectorAll('.black');
const orange = document.querySelectorAll('.orange');

nodecg.listenFor('updatel3', (data) => {
	title.innerHTML = data.title;
	sub.innerHTML = data.sub;

	tl.to(black, { ease: 'power3.in', width: '100%', duration: 0.5 });

	tl.to(orange, { ease: 'power2.in', width: '100%', duration: 0.2 }, '-=0.2');
	tl.from([ '#title', '#sub' ], { duration: 0.2, opacity: 0 });
	tl.to(orange, { ease: 'power3.out', width: '0', duration: 0.5 });
	tl.to(black, { ease: 'power1.out', width: '0', duration: 0.2 });

	tl.to(black, { ease: 'power3.out', width: '100%', duration: 0.5 }, '+=5');
	tl.to([ '#title', '#sub' ], { duration: 0.2, opacity: 0 });
	tl.to(black, { ease: 'power3.out', width: '0', duration: 0.5 });

	tl.call(() => {
		title.innerHTML = '';
		sub.innerHTML = '';
	});

	tl.set([ '#title', '#sub' ], { width: '', opacity: '' });
});
