import { ADD_MEAL } from '../constants/ActionTypes'

export const addMeal = (type, data) => ({
  type: ADD_MEAL,
  payload: {
    type: data,
  },
})
