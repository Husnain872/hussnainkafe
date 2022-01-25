const icon = document.querySelector('.icon');
const cross = document.querySelector('.cross');
const nav = document.querySelector('.header-nav');
const active = document.querySelector('.active');

icon.addEventListener('click', () => {
    nav.classList.add('active')
});
cross.addEventListener('click', () => {
    nav.classList.remove('active')
});
