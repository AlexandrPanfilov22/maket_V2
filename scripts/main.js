const burgerBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
let show = false;

const services = document.querySelector('.services-card-container');
const addCardButton = document.querySelector('.add-card');
const card = document.querySelector('.services-card-container');
const cloneCard = card.cloneNode(true);

function togler() {
    if(show) {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }

    show = !show;
}
burgerBtn.addEventListener('click', togler);

function addNewCard() {
    services.append(cloneCard);
}

addCardButton.addEventListener('click', addNewCard);