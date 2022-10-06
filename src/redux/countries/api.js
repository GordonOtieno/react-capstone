const BASE_URL = 'https://covid-api.mmediagroup.fr/v1/cases';

export const getCountries = async (continent) => {
  const response = await fetch(`${BASE_URL}?continent=${continent}`);

  return response.json();
};

export const getCountry = async (name) => {
  const response = await fetch(`${BASE_URL}?country=${name}`);

  return response.json();
};
