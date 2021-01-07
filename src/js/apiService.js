const apiKey = '19803942-bce50698df017688d362fe506';

export default {
  searchQuery: '',
  page: 1,

  fetchImages() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;
    const options = {
      headers: {
        Accept: 'application/json',
      }
    };
    return fetch(url, options)
      .then(res => res.json())
      .then(({ images }) => {
      this.page += 1;
      return images;
    })
  }
}