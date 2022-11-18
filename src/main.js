import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const products = document.querySelector('.products');

async function showProducts() {
  const product = await fetchProductsList('computador');
  product.forEach((element) => {
    products.appendChild(createProductElement(element));
  });
}
showProducts();

document.querySelector('.cep-button').addEventListener('click', searchCep);
