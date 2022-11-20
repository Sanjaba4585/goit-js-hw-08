"use strict";

var _simplelightbox = _interopRequireDefault(require("simplelightbox"));
require("simplelightbox/dist/simple-lightbox.min.css");
var _galleryItems = require("./gallery-items");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Add imports above this line

// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = makeGalleryMarkup(_galleryItems.galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
function makeGalleryMarkup(pictures) {
  return pictures.map(_ref => {
    let {
      preview,
      original,
      description
    } = _ref;
    return `<div class="gallery__item">
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`;
  }).join('');
}
new _simplelightbox.default('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});
console.log(_galleryItems.galleryItems);