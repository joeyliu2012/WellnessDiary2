import {
  AsyncStorage,
} from 'react-native'
import _ from 'lodash/fp'
import {
  SAVE_MEAL,
  MEAL_FETCH_START,
  MEALS_FETCHED,
} from '../constants/ActionTypes'

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

export const fetchMeals = (date) => (dispatch, getState) => {
  dispatch({
    type: MEAL_FETCH_START,
    payload: { date },
  })
  AsyncStorage.getItem(date, (err, value) => {
    const meals = JSON.parse(value)
    dispatch({
      type: MEALS_FETCHED,
      payload: {
        meals,
        date,
      }
    })
  })
}
