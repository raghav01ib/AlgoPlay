//TOGGLE BODY
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    //change the theme of the website
    document.body.classList.toggle('dark');
});

//TOGGLE LOGO
const logo = document.querySelectorAll('logo');

customElements.forEach(function (navbar) {
    navbar.addEventListener('change', function () {

        Element.classList.toggle('logo');
    });
});

//TOGGLE NAVBAR  3.1
const navbtn = document.querySelectorAll('navbtn');


customElements.forEach(function (navbar) {
    navbar.addEventListener('change', function () {

        Element.classList.toggle('navbtn');
    });
});

//3.2
const abc = document.querySelectorAll('abc');


customElements.forEach(function (navbar) {
    navbar.addEventListener('change', function () {

        Element.classList.toggle('abc');
    });
});

//GRID
