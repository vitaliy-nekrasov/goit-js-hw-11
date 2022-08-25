import PixabayApiService from './js/pixabay-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const pixabayApiService = new PixabayApiService();
const { formEl, galleryEl, containerEl } = {
  formEl: document.querySelector('.search-form'),
  galleryEl: document.querySelector('.gallery'),
};
let isPageLoad = true;

formEl.addEventListener('submit', onSubmitForm);

async function onSubmitForm(evt) {
  try {
    evt.preventDefault();
    pixabayApiService.query = evt.currentTarget.elements.searchQuery.value;
    const resetPage = await pixabayApiService.resetPage();
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
    const lastEl = await document.querySelector('.img:last-child');
    isPageLoad = true;
    if (isPageLoad) {
      const observe = await observeLastEl(lastEl);
      isPageLoad = false;
    }
    const scroll = await startSmoothScroll();
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

async function startSmoothScroll() {
  const { height: cardHeight } = document
    .querySelector('body')
    .firstElementChild.getBoundingClientRect();

  const scroll = await window.scrollBy({
    top: cardHeight,
    behavior: 'smooth',
  });
}

async function showMoreImg() {
  try {
    const pictures = await pixabayApiService.getPictures(
      pixabayApiService.query
    );
    const markup = await pixabayApiService.galleryMarkup(pictures);
    const gallery = await createGallery(markup);
    const lastEl = await document.querySelector('.img:last-child');
    isPageLoad = true;
    if (isPageLoad) {
      observeLastEl(lastEl);
      isPageLoad = false;
    }
    if (pictures.length < 39) {
      Notify.warning(
        "We're sorry, but you've reached the end of search results."
      );
      infiniteScroll.unobserve(lastEl);
    }
  } catch (error) {
    console.log(error);
  }
}

async function observeLastEl(element) {
  infiniteScroll.observe(element);
}

const infiniteScrollCallback = (entries, observer) => {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  showMoreImg();
  observer.unobserve(entry.target);
};
const infiniteScroll = new IntersectionObserver(infiniteScrollCallback, {});
