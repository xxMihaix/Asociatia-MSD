
document.addEventListener('DOMContentLoaded', function () {

    const menuIcon = document.getElementById('menu');
    const menuContainer = document.getElementById('mobile-menu')
    menuIcon.addEventListener('click', function () {
        menuContainer.classList.toggle('active');
    })
})

const acasa = [
document.getElementById('pc1'),
document.getElementById('mob1'),
]

acasa.forEach(el => el.addEventListener('click', () => {
    window.location = 'https://msd.mihaii.com/#body';
}))

const despre = [
document.getElementById('pc2'),
document.getElementById('mob2'),
]

despre.forEach(el => el.addEventListener('click', () => {
    window.location = 'https://msd.mihaii.com/#section1';
}))

const proiecte = [
document.getElementById('pc3'),
document.getElementById('mob3'),
]

proiecte.forEach(el => el.addEventListener('click', () => {
    window.location = 'https://msd.mihaii.com/#section2';
}))

const doneaza = [
document.getElementById('pc4'),
document.getElementById('mob4'),
]

doneaza.forEach(el => el.addEventListener('click', () => {
    window.location = 'https://msd.mihaii.com/#donation-title';
}))

const contact = [
document.getElementById('pc5'),
document.getElementById('mob5'),
]

contact.forEach(el => el.addEventListener('click', () => {
    window.location = 'https://msd.mihaii.com/#contact-title';
}))