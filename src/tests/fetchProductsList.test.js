import './mocks/fetchSimulator';
import { fetchProduct, fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', () => {
    expect(fetchProductsList('computador')).toBeInstanceOf(Promise)
  });
  
  // it('fetch é chamado com o endpoint correto ao executar fetchProductsList', () => {
  //   expect(() => fetchProductsList()).toThrowError('Termo de busca não informado')
  // });
  
  // it('fetchProductsList chamada sem argumentos ela retorna uma frase de erro', () => {
  //   expect(() => fetchProductsList()).toThrowError('Termo de busca não informado')
  // });
  // it('...', () => {
  // });
});
