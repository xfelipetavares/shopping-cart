import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';

// const teste = fetchProductsList()

// console.log(teste);

document.querySelector('.cep-button').addEventListener('click', searchCep);
