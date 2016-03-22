import { ADD_MEAL } from '../constants/ActionTypes'

export const addMeal = (type, date, photo=null, nutrition={}, location={}) => ({
  type: ADD_MEAL,
  payload: {
    type,
    date,
    photo,
    nutrition,
  },
})
