import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryGrid = document.querySelector(".gallery");

const pictureItems = galleryItems.map((galleryItem) => {
  const listItem = document.createElement('li');
  listItem.classList.add("gallery__item");
  listItem.innerHTML = `<a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      alt="${galleryItem.description}"
    />
  </a>`;
  return listItem;
});

galleryGrid.append(...pictureItems);

const gallery = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});



