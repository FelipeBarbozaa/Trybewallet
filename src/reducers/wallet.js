import { GET_CURRENCIES, GET_EXPENSES } from '../actions';

const INITAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, currencies: action.payload };
  case GET_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default wallet;
