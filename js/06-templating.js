//* Різниця між властивостями textContent та innerHTML
// const mainTitleEl = document.querySelector('.js-title');

// mainTitleEl.textContent = '<span>New</span> Title';
// mainTitleEl.innerHTML = '<a href="#"><span>New</span> Title</a>';

const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

/*
<li class="gallery-item">
  <a href="#">
    <img src="" alt="" width="" height="">
  </a>
</li>
*/

//* Функція для створення карточки createGalleryCard(cardInfo)
const createGalleryCard = pictureInfo => {
  //* Повернення шаблоного рядка з розміткою
  return `
  <li class="gallery-item">
    <a href="#">
      <img src="${pictureInfo.url}" alt="${pictureInfo.alt}" width="${pictureInfo.width}" height="${pictureInfo.height}">
    </a>
  </li>
  `;
};

// console.log(createGalleryCard(pictures[0]));
// console.log(createGalleryCard(pictures[1]));
// console.log(createGalleryCard(pictures[2]));

//* Створення масиву рядків із елементами
const cardsArr = pictures.map(picture => createGalleryCard(picture));

console.log(cardsArr);
console.log(cardsArr.join(''));

//* Вставка елементів на сторінку (innerHTML/insertAdjacentHTML)
const galleryListEl = document.querySelector('.js-gallery');

// galleryListEl.innerHTML = cardsArr.join('');
galleryListEl.insertAdjacentHTML('beforeend', cardsArr.join(''));
