
import { SET_USER } from '../actions/types';

const initialState = {
  name: '',
};

export default function (state = initialState, action) {
  if (action.type === SET_USER) {
    return {
      ...state,
      name: action.payload,
    };
  }
  return state;
}
