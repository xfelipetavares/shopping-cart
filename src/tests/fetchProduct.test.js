import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('fetch é chamado ao executar fetchProduct', () => {
    expect(fetchProduct('MLB1405519561')).toBeInstanceOf(Promise)
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    const teste = await fetchProduct('MLB1405519561')
    const result = teste.site_id
    expect(result).toBe("MLB")
  });
  
  it('fetch é chamado ao executar fetchProduct', async () => {
    expect(await fetchProduct('MLB1405519561')).toEqual(product)
  });
  
  it('fetchProduct chamada sem argumentos ela retorna uma frase de erro', () => {
    expect(() => fetchProduct()).rejects.toThrowError('ID não informado')
  });

});
