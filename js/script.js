/*================menu section===============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*==========scrooling section=========*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id +']').classList.add('active');
            });
        };
    });
    /*======================navbar======================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};
ScrollReveal({ 
    reset: true, 
    distance: '80px',
    get distance() {
        return this._distance;
    },
    set distance(value) {
        this._distance = value;
    },
    duration:2000,
    delay:2
});
ScrollReveal().reveal('.home-project,.heading', { origin: 'top'});
ScrollReveal().reveal('.home-img,.skills-container,.project-box', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right'});