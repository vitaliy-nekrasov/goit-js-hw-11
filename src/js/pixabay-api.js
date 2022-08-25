const axios = require('axios');
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29456353-5465c64cf9d8797860ea8e981';
const options = `image_type=photo&orientation=horizontal&safesearch=true`;

export default class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async getPictures(value) {
    const res = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${value}&${options}&page=${this.page}&per_page=40`
    );
    const data = await res.data.hits;
    const increment = await this.incrementPage();
    return data;
  }

  async totalHits(value) {
    const res = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${value}&${options}`
    );
    const totalPictures = await res.data.totalHits;
    return totalPictures;
  }

  async galleryMarkup(pictures) {
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
      const markupString = `<a class="img" href="${largeImageURL}">
    <div class="photo-card post pagination__next">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
    <p class="info-item">
      <b>Likes<br /><span>${likes}</span></b>
    </p>
    <p class="info-item">
      <b>Views<br /><span>${views}</span></b>
    </p>
    <p class="info-item">
      <b>Comments<br /><span>${comments}</span></b>
    </p>
    <p class="info-item">
      <b>Downloads<br /><span>${downloads}</span></b>
    </p>
  </div>
</div></a>`;
      return markupString;
    });
    return markup.join(' ');
  }

  async incrementPage() {
    const increment = await (this.page += 1);
    return this.page;
  }

  async resetPage() {
    const reset = await (this.page = 1);
    return reset;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
