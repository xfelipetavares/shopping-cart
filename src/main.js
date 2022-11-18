import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';

const products = document.querySelector('.products');

export const showLoadingScreen = (item) => {
  const loadingScreen = document.createElement('p');
  loadingScreen.classList.add('loading');
  loadingScreen.innerText = 'carregando...';
  item.appendChild(loadingScreen);
};
export const removeLoadingScreen = (item) => {
  item.innerHTML = '';
};

async function showProducts() {
  showLoadingScreen(products);
  const product = await fetchProductsList('computador');
  removeLoadingScreen(products);
  product.forEach((element) => {
    products.appendChild(createProductElement(element));
  });
}
showProducts();

document.querySelector('.cep-button').addEventListener('click', searchCep);
