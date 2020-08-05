import { gsap } from '../../node_modules/gsap/index.js';

const nameplateEl = document.getElementById('nameplate');
const titleEl = document.getElementById('title');
const infoEl = document.getElementById('info');
const subEl = document.getElementById('sub');
const mainEl = document.getElementById('main');

const text = document.querySelectorAll('.text');

nodecg.listenFor('playComingUp', (data) => {
	titleEl.innerHTML = data.title;
	infoEl.innerHTML = data.info;
	subEl.innerHTML = data.sub;

	const tl = gsap.timeline();

	tl.to(nameplateEl, { duration: 0.5, autoAlpha: 1 });

	tl.from(text, { duration: 1, stagger: 0.5, autoAlpha: 0, width: 0, backgroundColor: 'black' });

	tl.to(text, { duration: 1, stagger: -0.2, autoAlpha: 0, width: 0, backgroundColor: 'yellow' }, '+=5');

	tl.call(() => {
		titleEl.innerHTML = '';
		infoEl.innerHTML = '';
		subEl.innerHTML = '';
	});

	tl.set([ nameplateEl, titleEl, subEl, infoEl, mainEl, text ], { width: '', opacity: '', backgroundColor: '' });
});
