function toggleMenu() {
    const menu = document.querySelector('ul');
    menu.classList.toggle('menu');
}

function addNewCard() {
    const services = document.querySelector('.services-card-container');

    const cardContainer = document.createElement('div');
    const card = document.createElement('div');

    const imageContainer = document.createElement('div');
    const image = document.createElement('img');

    const titleContainer = document.createElement('h3');
    const title = document.createElement('span');
    const inTitle = document.createElement('span');

    const description = document.createElement('p');
    const link = document.createElement('a');

    cardContainer.className = 'col-12 col-sm-7 col-md-6 col-xl-4 text-xl-start text-center mb-5';
    card.className = 'services-card mb-5 mb-xl-0';

    imageContainer.className = 'services-card mb-5 mb-xl-0';
    image.className = 'mb-4';
    image.setAttribute('src', 'img/office.png');

    titleContainer.className = 'title';
    title.className = 'title';
    title.innerHTML = 'Исследование и упаковка';

    inTitle.className = 'text-primary';
    inTitle.innerHTML = '01.';

    description.className = 'description card-description';
    description.innerHTML = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'

    link.className = 'link d-block';
    link.innerHTML = 'Подробнее';

    cardContainer.append(card);

    card.append(imageContainer);
    imageContainer.append(image);

    card.append(titleContainer);
    titleContainer.append(inTitle);
    titleContainer.append(title);

    card.append(description);

    card.append(link);

    services.append(cardContainer);
}