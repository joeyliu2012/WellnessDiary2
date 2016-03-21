import {
  ADD_MEAL,
} from '../constants/ActionTypes'
import { Map } from 'immutable'

const meals = (state = new Map({
  'Breakfast': '',
  'Lunch': '',
  'Dinner': '',
  'Snacks': '',
}), action) => {
  switch (action.type) {
  case ADD_MEAL:
    return state.merge(action.payload)
  default:
    return state
  }
}

export default meals
