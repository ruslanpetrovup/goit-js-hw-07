import { galleryItems } from './gallery-items.js';
// Change code below this line

const documentGallery = document.querySelector('.gallery');
const imageCard = onCreateGalleryItem(galleryItems);
let openOriginalImage;

documentGallery.insertAdjacentHTML('beforeend', imageCard);
documentGallery.addEventListener('keydown', onPressEscToCloseImage);

function onCreateGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
             <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image lazyload"

                    data-src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
    })
    .join('');
}

documentGallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  openOriginalImage = basicLightbox.create(`
		<img src="${e.target.dataset.source}" width="1280" height="900">
	`);
  openOriginalImage.show();
});

function onPressEscToCloseImage(event) {
  if (event.code !== 'Escape') {
    return;
  }
  openOriginalImage.close();
}
