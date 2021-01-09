import './styles.css';

import toastr from 'toastr';
import options from './js/toastr.options';
import 'toastr/build/toastr.min.css';
toastr.options = options;
import debounce from 'lodash.debounce';

import apiService from './js/apiService';
import refs from './js/refs';
import updateImageMarkup from './js/update-images-markup';


refs.searchForm.addEventListener('submit', event => {
   event.preventDefault();
  const form = event.currentTarget;
  
  apiService.query = form.elements.query.value;
 
   refs.gallery.innerHTML = "";
   form.reset();
    apiService.resetPage();
  refs.loadMoreBtn.classList.add('is-hidden');
  
  apiService.fetchImages().then(images => {
    updateImageMarkup(images);
    refs.loadMoreBtn.classList.remove('is-hidden');
  });

});

refs.loadMoreBtn.addEventListener('click', () => {
  apiService.fetchImages().then(images => {
    updateImageMarkup(images);

    window.scrollBy({
  top: 100,
  left: 0,
  behavior: 'smooth'
});
     window.scrollBy(0, window.innerHeight);
  });
  
});
 

