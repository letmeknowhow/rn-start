
import { SET_INDEX } from './types';

export function setIndex(index) {
  return {
    type: SET_INDEX,
    payload: index,
  };
}
