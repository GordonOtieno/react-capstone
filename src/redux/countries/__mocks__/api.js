export const getCountries = async () => Promise.resolve({
  Testing1: {
    All: {
      confirmed: 10,
      country: 'Test1',
    },
  },
  Testing2: {
    All: {
      confirmed: 20,
      country: 'Test2',
    },
  },
});

export const getCountry = async () => Promise.resolve({
  All: {
    confirmed: 30,
    country: 'All',
  },
  Testing3: {
    confirmed: 20,
  },
});
