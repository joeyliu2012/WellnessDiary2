import {
  MEAL_FETCH_START,
  MEALS_FETCHED,
} from '../constants/ActionTypes'

const loading = (state = {}, action) => {
  switch(action.type) {
    case MEAL_FETCH_START:
      return {
        ...state,
        [action.payload.date]: false,
      }
    case MEALS_FETCHED: {
      return {
        ...state,
        [action.payload.date]: true,
      }
    }
    default:
      return state
  }
}

export default loading
