const navbar = document.querySelector('.navbar');

document.addEventListener('scroll', () => {

	if(window.pageYOffset < document.getElementById('home').offsetTop){
		document.querySelector('.nav__menu :nth-child(1)').style.borderTop = 'solid 3px #FF6033';
		document.querySelector('.nav__menu :nth-child(2)').style.borderTop = 'solid 3px transparent';
	} else if (window.pageYOffset >= document.getElementById('projects').offsetTop && window.pageYOffset < document.getElementById('about').offsetTop) {
		document.querySelector('.nav__menu :nth-child(2)').style.borderTop = 'solid 3px #FF6033';
		document.querySelector('.nav__menu :nth-child(1)').style.borderTop = 'solid 3px transparent';
		document.querySelector('.nav__menu :nth-child(3)').style.borderTop = 'solid 3px transparent';
	} else if (window.pageYOffset >= document.getElementById('about').offsetTop && window.pageYOffset < document.getElementById('technologies').offsetTop) {
		document.querySelector('.nav__menu :nth-child(3)').style.borderTop = 'solid 3px #FF6033';
		document.querySelector('.nav__menu :nth-child(2)').style.borderTop = 'solid 3px transparent';
		document.querySelector('.nav__menu :nth-child(4)').style.borderTop = 'solid 3px transparent';
	} else if (window.pageYOffset >= document.getElementById('technologies').offsetTop && window.pageYOffset < document.getElementById('contact').offsetTop) {
		document.querySelector('.nav__menu :nth-child(4)').style.borderTop = 'solid 3px #FF6033';
		document.querySelector('.nav__menu :nth-child(3)').style.borderTop = 'solid 3px transparent';
		document.querySelector('.nav__menu :nth-child(5)').style.borderTop = 'solid 3px transparent';
	} else if (window.pageYOffset >= document.getElementById('contact').offsetTop) {
		document.querySelector('.nav__menu :nth-child(5)').style.borderTop = 'solid 3px #FF6033';
		document.querySelector('.nav__menu :nth-child(4)').style.borderTop = 'solid 3px transparent';
	} 

});

