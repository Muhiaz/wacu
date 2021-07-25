const showMenu = (toggleId,navId)=>{
	toggle = document.getElementById(toggleId);
	nav = document.getElementById(navId);
	if(toggle && nav){
		toggle.addEventListener('click', ()=>{
			nav.classList.toggle('show');
		})
	}
}
showMenu('nav-toggle','nav-menu');

const navLink = document.querySelectorAll('.nav__link');
 function linkAction(){
 	navLink.forEach(n => n.classList.remove('active'));
 	this.classList.add('active');
 	const navMenu = document.getElementById('nav-menu');
 	navMenu.classList.remove('show');
 }
 navLink.forEach(n => n.addEventListener('click',linkAction));

 const sr = ScrollReveal({
 	origin:'top',
 	distance:'80px',
 	duration:2000,
 	reset:true
 });
 sr.reveal('.home__title',{});
 sr.reveal('.button',{delay:200});
 sr.reveal('.home__img',{delay:250});
 sr.reveal('.social__icon',{delay:300});

  sr.reveal('.section-title',{});
 sr.reveal('.about__img',{delay:200});
 sr.reveal('.about__subtitle',{delay:250});
 sr.reveal('.about__text',{delay:300});


 sr.reveal('.work__img',{delay:200});
 sr.reveal('.skills__subtitle',{delay:250});
 sr.reveal('.skills__img',{delay:300});