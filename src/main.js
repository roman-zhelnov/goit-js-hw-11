import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImagesByQuery } from './js/pixabay-api';

const form = document.querySelector('.gallery-form');
const input = document.querySelector('.input-for-gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = input.;
}
