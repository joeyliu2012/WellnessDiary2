import {
  SAVE_MEAL,
  MEALS_FETCHED,
} from '../constants/ActionTypes'

const meals = (state = {}, action) => {
  switch (action.type) {
    case SAVE_MEAL:
      return {
        ...state,
        [action.payload.date]: {
          ...state[action.payload.date],
          [action.payload.type]: action.payload,
        },
      }
    case MEALS_FETCHED:
      return {
        ...state,
        [action.payload.date]: action.payload.meals,
      }
    default:
      return state
  }
}

export default meals
