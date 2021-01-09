document.querySelector('#hamburger-menu').addEventListener('click', function () {
    document.querySelector('#hamburger-menu').classList.toggle('hamburger-animation')
    document.querySelector('#nav-menu').classList.toggle('nav-menu-show');
    document.querySelector('.logo').classList.toggle('logo-hide')
});

document.querySelector('#clicka').addEventListener('click', function () {
    document.querySelector('#clicka').classList.toggle('event-move-left')
    document.querySelector('#clickb').classList.toggle('event-move-right')
});