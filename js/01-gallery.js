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
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>`;
  return listItem;
});

galleryGrid.append(...pictureItems);

galleryGrid.addEventListener("click", showBigImage);
function showBigImage(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">`)
  instance.show()
}

