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
    const increment = await this.incrementPage();
    return res;
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
