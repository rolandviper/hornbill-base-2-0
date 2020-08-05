import { gsap } from '../../node_modules/gsap/index.js';

const nameplateEl = document.getElementById('nameplate');
const titleEl = document.getElementById('title');

const event1 = document.getElementById('event1');
const time1 = document.getElementById('time1');
const event2 = document.getElementById('event2');
const time2 = document.getElementById('time2');
const event3 = document.getElementById('event3');
const time3 = document.getElementById('time3');
const event4 = document.getElementById('event4');
const time4 = document.getElementById('time4');

const events = document.querySelectorAll('.event');
const text = document.querySelectorAll('.text');

nodecg.listenFor('showSchedule', (data) => {
	event1.innerHTML = data.event1;
	time1.innerHTML = data.time1;
	event2.innerHTML = data.event2;
	time2.innerHTML = data.time2;
	event3.innerHTML = data.event3;
	time3.innerHTML = data.time3;
	event4.innerHTML = data.event4;
	time4.innerHTML = data.time4;

	const tl = gsap.timeline();

	tl.to(nameplateEl, { duration: 0.5, autoAlpha: 1 });

	tl.from(text, { duration: 1, width: 0, stagger: 0.5, autoAlpha: 0, backgroundColor: 'black' });

	tl.to(text, { duration: 0.5, width: 0, stagger: -0.2, autoAlpha: 0, backgroundColor: 'yellow' }, '+=8');

	tl.call(() => {
		event1.innerHTML = '';
		time1.innerHTML = '';
		event2.innerHTML = '';
		time2.innerHTML = '';
		event3.innerHTML = '';
		time3.innerHTML = '';
		event4.innerHTML = '';
		time4.innerHTML = '';
	});

	tl.set([ nameplateEl, event1, time1, event2, time2, event3, time3, event4, time4, text ], {
		width: '',
		opacity: '',
		backgroundColor: ''
	});
});
