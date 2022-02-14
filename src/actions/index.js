import fetchApi from '../services/api';

export const CHANGE_USER = 'CHANGE_USER';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_EXPENSES = 'GET_EXPENSES';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';

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

export const dellExpenses = (payload) => ({
  type: DELETE_EXPENSES,
  payload,
});

export const getCurrencies = () => async (dispatch) => {
  try {
    const response = await fetchApi();
    const data = Object.keys(response).filter((e) => e !== 'USDT');
    dispatch(attCurrencies(data));
  } catch (error) {
    console.log(error);
  }
};

export const getExpenses = (expenses) => async (dispatch) => {
  try {
    const data = await fetchApi();
    const addExpenses = {
      ...expenses,
      exchangeRates: data,
    };
    dispatch(attExpenses(addExpenses));
  } catch (error) {
    console.log(error);
  }
};
