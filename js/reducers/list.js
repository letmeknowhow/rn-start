import { SET_INDEX } from '../actions/types';

const initialState = {
  list: [
    'React Native Starter Kit',
    'React Navigation',
    'NativeBase Easy Grid',
    'NativeBase',
    'CodePush',
    'Redux'
  ],
  selectedIndex: undefined
};

export default function (state = initialState, action) {
  if (action.type === SET_INDEX) {
    return {
      ...state,
      selectedIndex: action.payload,
    };
  }
  return state;
}
