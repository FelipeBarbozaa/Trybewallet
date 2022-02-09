export const CHANGE_USER = 'CHANGE_USER';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_EXPENSES = 'GET_EXPENSES';

export const attUser = (payload) => ({
  type: CHANGE_USER,
  payload,
});

export const attCurrencies = (payload) => ({
  type: GET_CURRENCIES,
  payload,
});

export const attExpenses = (payload) => ({
  type: GET_EXPENSES,
  payload,
});
