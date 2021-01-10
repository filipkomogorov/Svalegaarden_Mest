document.querySelector('#hamburger-menu').addEventListener('click', function () {
    document.querySelector('#hamburger-menu').classList.toggle('hamburger-animation')
    document.querySelector('#nav-menu').classList.toggle('nav-menu-show');
    document.querySelector('.logo').classList.toggle('logo-hide')
});


document.querySelector('#arrow-right').addEventListener('click', function () {
    document.querySelector('#event-wedding').classList.toggle('event-move-left')
    document.querySelector('#event-confirmation').classList.toggle('event-move-right')
})

document.querySelector('#arrow-left').addEventListener('click', function () {
    document.querySelector('#event-wedding').classList.toggle('event-move-left')
    document.querySelector('#event-confirmation').classList.toggle('event-move-right')
})