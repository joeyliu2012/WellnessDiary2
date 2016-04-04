import _ from 'lodash/fp'
import {
  SAVE_MEAL,
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
  default:
    return state
  }
}

export default meals
