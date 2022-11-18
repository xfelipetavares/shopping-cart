import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';

const products = document.querySelector('.products');

const showLoadingScreen = (item) => {
  const loadingScreen = document.createElement('p');
  loadingScreen.classList.add('loading');
  loadingScreen.innerText = 'carregando...';
  item.appendChild(loadingScreen);
};
const showErrorScreen = (item) => {
  const errorScreen = document.createElement('p');
  errorScreen.classList.add('error');
  errorScreen.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  item.appendChild(errorScreen);
};
const removeLoadingScreen = (item) => {
  item.innerHTML = '';
};

async function showProducts() {
  showLoadingScreen(products);
  try {
    const product = await fetchProductsList('computador');
    removeLoadingScreen(products);
    product
      .forEach((element) => {
        products.appendChild(createProductElement(element));
      });
  } catch {
    showErrorScreen(products);
  }
}
showProducts();

document.querySelector('.cep-button').addEventListener('click', searchCep);
