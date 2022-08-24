import PixabayApiService from './js/pixabay-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const pixabayApiService = new PixabayApiService();
const { formEl, galleryEl, loadMoreBtnEl } = {
  formEl: document.querySelector('.search-form'),
  galleryEl: document.querySelector('.gallery'),
  loadMoreBtnEl: document.querySelector('.load-more'),
};

formEl.addEventListener('submit', onSubmitForm);
loadMoreBtnEl.addEventListener('click', showMoreImg);

async function onSubmitForm(evt) {
  try {
    evt.preventDefault();
    pixabayApiService.query = evt.currentTarget.elements.searchQuery.value;
    const resetPage = await pixabayApiService.resetPage();
    const removeLoadBtn = await removeLoadMoreBtn();
    const removeGalleryMarkup = await removeGallery();
    const pictures = await pixabayApiService.getPictures(
      pixabayApiService.query
    );
    if (pictures.length === 0) {
      return Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    const totalPictures = await pixabayApiService.totalHits(
      pixabayApiService.query
    );
    Notify.info(`Hooray! We found ${totalPictures} images.`);
    const markup = await pixabayApiService.galleryMarkup(pictures);
    const gallery = await createGallery(markup);
    const scroll = await startSmoothScroll();
    const showLoadMoreBtn = await addLoadMoreBtn();
  } catch (error) {
    console.log(error);
  }
}

async function showMoreImg() {
  try {
    const removeLoadBtn = await removeLoadMoreBtn();
    const pictures = await pixabayApiService.getPictures(
      pixabayApiService.query
    );
    const markup = await pixabayApiService.galleryMarkup(pictures);
    const gallery = await createGallery(markup);
    const scroll = await loadMoreSmoothScroll();
    const showLoadMoreBtn = await addLoadMoreBtn();
    if (pictures.length < 39) {
      Notify.warning(
        "We're sorry, but you've reached the end of search results."
      );
      const removeLoadBtn = await removeLoadMoreBtn();
    }
  } catch (error) {
    console.log(error);
  }
}

async function createGallery(markup) {
  const createMarkup = await galleryEl.insertAdjacentHTML('beforeend', markup);

  let gallery = new SimpleLightbox('.gallery a');
  gallery.on('show.simplelightbox');
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

async function startSmoothScroll() {
  const { height: cardHeight } = document
    .querySelector('body')
    .firstElementChild.getBoundingClientRect();

  const scroll = await window.scrollBy({
    top: cardHeight,
    behavior: 'smooth',
  });
}

async function loadMoreSmoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  const scroll = await window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
