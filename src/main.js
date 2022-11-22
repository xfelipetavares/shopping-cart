import { getAddress, searchCep } from './helpers/cepFunctions';
import './style.css';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { getSavedCartIDs, saveCartID } from './helpers/cartFunctions';

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

const addProduct = document.querySelector('.products');
const cartProducts = document.querySelector('.cart__products');

addProduct.addEventListener('click', async () => {
  const windowEventTarget = window.event.target;

  if (windowEventTarget.className === 'product__add') {
    const productID = windowEventTarget.parentElement.firstChild.innerText;
    saveCartID(productID);
    cartProducts.appendChild(createCartProductElement(await fetchProduct(productID)));
  }
});

function addProductCart() {
  const arrayProducts = getSavedCartIDs().map((productID) => fetchProduct(productID));

  Promise.all(arrayProducts)
    .then((response) => response.forEach((element) => {
      cartProducts.appendChild(createCartProductElement(element));
    }));
}
addProductCart();
