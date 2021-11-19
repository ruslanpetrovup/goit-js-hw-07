import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const documentGallery = document.querySelector('.gallery');
const imageCard = onCreateGalleryItem(galleryItems);

documentGallery.insertAdjacentHTML('beforeend', imageCard);

function onCreateGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image lazyload"
        data-src="${preview}"
        alt="${description}" />
      </a>`;
    })
    .join('');
}
// Standalone variant
new SimpleLightbox('.gallery a', {
  disableRightClick: true,
  scrollZoom: false,
  captionDelay: 250,
  captionsData: 'alt',
});
