import _ from 'lodash/fp'
import {
  SAVE_MEAL,
  MEALS_FETCHED,
} from '../constants/ActionTypes'

const meals = (state = {}, action) => {
  switch (action.type) {
  case SAVE_MEAL:
    const { date, type } = action.payload
    const entry = { [type] : action.payload }
    return {
      ...state,
      [date]: {
        ...state[date],
        ...entry,
      }
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
