import _ from 'lodash/fp'
import { SAVE_MEAL } from '../constants/ActionTypes'

export const saveMeal = ({type, date, photo=null, nutrition={}, location={}}) => ({
  type: SAVE_MEAL,
  payload: {
    type,
    date,
    photo: _.pick(['uri', 'height', 'width'], photo),
    nutrition,
    location,
  },
})
