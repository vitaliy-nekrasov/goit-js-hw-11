const axios = require('axios');
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29456353-5465c64cf9d8797860ea8e981';
let page = 1;
const options = `image_type=photo&orientation=horizontal&safesearch=true`;
let searchQuery = '';

async function getPictures(value) {
  const res = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${value}&${options}&page=${page}&per_page=40`
  );
  const increment = await incrementPage();
  const data = await res.data.hits;
  return data;
}

const { formEl, galleryEl, loadMoreBtnEl } = {
  formEl: document.querySelector('.search-form'),
  galleryEl: document.querySelector('.gallery'),
  loadMoreBtnEl: document.querySelector('.load-more'),
};
formEl.addEventListener('submit', onSubmitForm);

async function onSubmitForm(evt) {
  evt.preventDefault();
  searchQuery = evt.currentTarget.elements.searchQuery.value;
  const removeGalleryMarkup = await removeGallery();
  const removeLoadBtn = await removeLoadMoreBtn();
  const pictures = await getPictures(searchQuery);
  if (pictures.length === 0) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
  const markup = await galleryMarkup(pictures);
  const gallery = await createGallery(markup);
  const showLoadMoreBtn = await addLoadMoreBtn();
}

async function galleryMarkup(pictures) {
  const markup = await pictures.map(picture => {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = picture;
    const markupString = `<div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes<br><span>${likes}</span></b>
    </p>
    <p class="info-item">
      <b>Views<br><span>${views}</span></b>
    </p>
    <p class="info-item">
      <b>Comments<br><span>${comments}</span></b>
    </p>
    <p class="info-item">
      <b>Downloads<br><span>${downloads}</span></b>
    </p>
  </div>
</div>`;
    return markupString;
  });
  return markup.join(' ');
}

async function createGallery(markup) {
  return await galleryEl.insertAdjacentHTML('beforeend', markup);
}

async function removeGallery() {
  const remove = await (galleryEl.innerHTML = '');
  return remove;
}

async function addLoadMoreBtn() {
  const showBtn = await loadMoreBtnEl.classList.add('show');
  return showBtn;
}

async function removeLoadMoreBtn() {
  const removeBtn = await loadMoreBtnEl.classList.remove('show');
  return removeBtn;
}

async function incrementPage() {
  const increment = await (page += 1);
  console.log(page);
  return page;
}

loadMoreBtnEl.addEventListener('click', showMoreImg);

async function showMoreImg() {
  //   const increment = await incrementPage();
  const pictures = await getPictures(searchQuery);
  const markup = await galleryMarkup(pictures);
  const gallery = await createGallery(markup);
  const showLoadMoreBtn = await addLoadMoreBtn();
}
