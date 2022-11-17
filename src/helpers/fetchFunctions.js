export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (item) => {
  if (item === undefined) {
    throw new Error('Termo de busca não informado').message;
  }
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${item}`);
  const body = await response.json();
  return body.results;
};
