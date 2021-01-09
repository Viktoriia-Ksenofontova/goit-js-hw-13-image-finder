import toastr from 'toastr';
import options from './toastr.options';
import 'toastr/build/toastr.min.css';
toastr.options = options;
import refs from './refs';


export default {
  searchQuery: '',
  page: 1,
  apiKey : '19803942-bce50698df017688d362fe506',
  fetchImages() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.apiKey}`;
    const options = {
      headers: {
        Accept: 'application/json',
      }
    };
    return fetch(url, options)
      .then(res => res.json())
      .then(({ hits }) => {
        if (hits.length === 0) {
        toastr["error"]('Change request');
        return;
       }

        this.page += 1;
        toastr["success"](`Displayed ${12*(this.page - 1)} images fo your request`);
        return hits;
      })
  },

  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};