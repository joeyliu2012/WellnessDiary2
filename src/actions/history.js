import moment from 'moment'
import _ from 'lodash/fp'
import {
  AsyncStorage,
} from 'react-native'
import { HISTORY_FETCHED } from '../constants/ActionTypes'

function fetchEntry (key: string): void {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key, (err, result) => {
      if (!err) resolve(JSON.parse(result))
      else      reject(err)
    })
  })
}

function fetchAllEntries(dates: Array<string>) {
  return new Promise.all(_.map(fetchEntry, dates))
}

export const fetchMealHistory = () => (dispatch, getState) => {
  const datesByWeek = _.groupBy((d) => {
    const date = moment(d)
    return `${date.year()}-${date.week() -  1}`
  }, getState().database)

  _.each((dates, key) => {
    fetchAllEntries(dates)
    .then((mealEntries) => {
      const nutritionEntries = _.map('nutrition', _.flatMap(_.values, mealEntries))
      const data = _.reduce((acc, nutrition) => {
        acc.calories += nutrition.calories || 0
        acc.fiber += nutrition.fiber || 0
        acc.fats += nutrition.fats || 0
        acc.protein += nutrition.protein || 0
        acc.carbs += nutrition.carbs || 0
        return acc
      }, {
        calories: 0,
        fiber: 0,
        fats: 0,
        protein: 0,
        carbs: 0,
      }, nutritionEntries)
      dispatch({
        type: HISTORY_FETCHED,
        payload: {
          week: key,
          data,
        }
      })
    })
  }, datesByWeek)
  // fetchAllEntries(dates).then((arr) => {

    // var history
    // arr.forEach((element, index, array) => {
    //   const iterationDay = (_.get("Breakfast.date", element) || _.get("Lunch.date", element) || _.get("Dinner.date", element))
    //   const iterationNutrition = {
    //     Breakfast: _.get("Breakfast.nutrition", element),
    //     Lunch: _.get("Lunch.nutrition", element),
    //     Dinner: _.get("Dinner.nutrition", element),
    //   }
    //   const iterationSummary = _.set(iterationDay, iterationNutrition, iterationSummary)
    //   const thisMeal = _.set(moment().year(moment(iterationDay).year()).week(moment(iterationDay).week()).day(0).format('YYYY-MM-DD'), iterationSummary, thisMeal)
    //   history = _.merge(history, thisMeal)
    // })
    // console.log(history)
    // dispatch({
    //   type: HISTORY_FETCHED,
    //   payload: history,
    // })
  // })
}
