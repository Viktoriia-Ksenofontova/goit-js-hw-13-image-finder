import './styles.css';

import toastr from 'toastr';
import options from './js/toastr.options';
import 'toastr/build/toastr.min.css';

toastr.options = options;

import debounce from 'lodash.debounce';

import searchFormTemplate from './templates/search-form.hbs';

