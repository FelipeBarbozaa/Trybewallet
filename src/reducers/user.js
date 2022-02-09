import { CHANGE_USER } from '../actions';

const INITAL_STATE = {
  email: '',
};

const user = (state = INITAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_USER:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default user;
