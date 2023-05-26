const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

//the class of toggle(when you click it opens and when you again it closes, alternating this two functions)
burger.addEventListener('click', () => {
    burger.classList.toggle('open')
    nav.classList.toggle('open')
    
});

