const cepInput = document.querySelector('.cep-input');
const cepButton = document.querySelector('.cep-button');
const cartAddress = document.querySelector('.cart__address');

function createArrApi(cepNumber) {
  const api1 = fetch(`https://cep.awesomeapi.com.br/json/${cepNumber}`);
  const api2 = fetch(`https://brasilapi.com.br/api/cep/v2/${cepNumber}`);
  const arr = [api1, api2];
  return arr;
}

export const getAddress = async (cepNumber) => {
  const response = await Promise.any(createArrApi(cepNumber));
  const result = await response.json();
  return result;
};

export const searchCep = async () => {
  try {
    const addressData = await getAddress(cepInput.value);
    const pattern = `${addressData.address} - ${addressData
      .district} - ${addressData.city} - ${addressData.state}`;
    cartAddress.innerHTML = pattern;
  } catch {
    cartAddress.innerHTML = 'CEP não encontrado';
  }
};
