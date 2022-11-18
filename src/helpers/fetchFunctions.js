export const fetchProduct = async (id) => {
  if (id === undefined) {
    throw new Error('ID não informado');
  }
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const body = await response.json();
  return body;
};

export const fetchProductsList = async (item) => {
  if (item === undefined) {
    throw new Error('Termo de busca não informado');
  }
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${item}`);
  const body = await response.json();
  return body.results;
};
