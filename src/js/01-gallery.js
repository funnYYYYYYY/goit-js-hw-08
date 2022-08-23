import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const creatingPictureAccordingTemplate = flower =>
  flower.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `
      <li class="gallery__list">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>
    `,
    ''
  );

const galleryFlower = document.querySelector('.gallery');
const galleryLayout = creatingPictureAccordingTemplate(galleryItems);

galleryFlower.insertAdjacentHTML('beforeend', galleryLayout);

const lightBox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionType: 'attr',
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: 'alt',
  docClose: true,
});
