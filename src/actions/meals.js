import { SAVE_MEAL } from '../constants/ActionTypes'

export const saveMeal = ({type, date, photo=null, nutrition={}, location={}}) => ({
  type: SAVE_MEAL,
  payload: {
    type,
    date,
    photo,
    nutrition,
  },
})
