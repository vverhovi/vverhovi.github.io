//moving from page one to page two
let button = document.querySelector('.button');
let pageOne = document.querySelector('.pageOne');
let pageTwo = document.querySelector('.pageTwo');

function handleButtonClick() {
    pageOne.style.display = 'none';
    pageTwo.style.display = 'block';
};

button.addEventListener('click', handleButtonClick);


//come back to main page
let btnHome = document.querySelector('.btnHome');

function handleButtonClickHome() {
    pageTwo.style.display = 'none';
    pageOne.style.display = 'block';
};

btnHome.addEventListener('click', handleButtonClickHome);
