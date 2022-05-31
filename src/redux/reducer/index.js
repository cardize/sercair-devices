import { DEVICE_OFFER } from '../actions/index'

const INITIAL_STATE = {
  localDevice: [],
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DEVICE_OFFER:
      return { ...state, localDevice: action.payload }
    default:
      return state
  }
}
