import { gsap } from '../../node_modules/gsap/index.js';
const tl = gsap.timeline();

const title = document.getElementById('title');
const sub = document.getElementById('sub');

const black = document.querySelector('.black');

nodecg.listenFor('updatel3', (data) => {
	title.innerHTML = data.title;
	sub.innerHTML = data.sub;

	tl.to(black, 0.6, { ease: 'power3.in', width: '50%' }, '+=0.4');
	tl.from('#title', { duration: 0.2, opacity: 0 });
});
