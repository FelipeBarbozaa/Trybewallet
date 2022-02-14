import { GET_CURRENCIES, GET_EXPENSES, DELETE_EXPENSES } from '../actions';

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
  case DELETE_EXPENSES:
    return { ...state, expenses: state.expenses.filter((e) => action.payload !== e.id) };
  default:
    return state;
  }
};

export default wallet;
