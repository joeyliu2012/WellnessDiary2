import React, {
  PropTypes,
  View,
  Component,
  ScrollView,
} from 'react-native'
import moment from 'moment'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import MealCard from './MealCard'

const mapStateToProps = (state) => ({
  database: state.database,
  meals: state.meals
})

const aggregateWeekNutrtion = (meals) => {
  const mealArray = Object.values(meals)
  var aggregatedWeek = { nutrition: {
    calories: 0,
    carbs: 0,
    fats: 0,
    fiber: 0,
    protein: 0
  }}
  mealArray.forEach(function (item, index, array) {
    aggregatedWeek.nutrition.calories = aggregatedWeek.nutrition.calories +
              (_.get('Breakfast.nutrition.calories', item) || 0) +
              (_.get('Lunch.nutrition.calories', item) || 0) +
              (_.get('Dinner.nutrition.calories', item) || 0),
    aggregatedWeek.nutrition.carbs = aggregatedWeek.nutrition.carbs +
              (_.get('Breakfast.nutrition.carbs', item) || 0) +
              (_.get('Lunch.nutrition.carbs', item) || 0) +
              (_.get('Dinner.nutrition.carbs', item) || 0),
    aggregatedWeek.nutrition.fats = aggregatedWeek.nutrition.fats +
              (_.get('Breakfast.nutrition.fats', item) || 0) +
              (_.get('Lunch.nutrition.fats', item) || 0) +
              (_.get('Dinner.nutrition.fats', item) || 0),
    aggregatedWeek.nutrition.fiber = aggregatedWeek.nutrition.fiber +
              (_.get('Breakfast.nutrition.fiber', item) || 0) +
              (_.get('Lunch.nutrition.fiber', item) || 0) +
              (_.get('Dinner.nutrition.fiber', item) || 0),
    aggregatedWeek.nutrition.protein = aggregatedWeek.nutrition.protein +
              (_.get('Breakfast.nutrition.protein', item) || 0) +
              (_.get('Lunch.nutrition.protein', item) || 0) +
              (_.get('Dinner.nutrition.protein', item) || 0)
  })
  return aggregatedWeek
}

const aggregateMealNutrition = (meal) => ({
   nutrition: {
     calories: (_.get('Breakfast.nutrition.calories', meal) || 0) +
               (_.get('Lunch.nutrition.calories', meal) || 0) +
               (_.get('Dinner.nutrition.calories', meal) || 0),
     carbs:    (_.get('Breakfast.nutrition.carbs', meal) || 0) +
               (_.get('Lunch.nutrition.carbs', meal) || 0) +
               (_.get('Dinner.nutrition.carbs', meal) || 0),
     fats:     (_.get('Breakfast.nutrition.fats', meal) || 0) +
               (_.get('Lunch.nutrition.fats', meal) || 0) +
               (_.get('Dinner.nutrition.fats', meal) || 0),
     fiber:    (_.get('Breakfast.nutrition.fiber', meal) || 0) +
               (_.get('Lunch.nutrition.fiber', meal) || 0) +
               (_.get('Dinner.nutrition.fiber', meal) || 0),
     protein:  (_.get('Breakfast.nutrition.protein', meal) || 0) +
               (_.get('Lunch.nutrition.protein', meal) || 0) +
               (_.get('Dinner.nutrition.protein', meal) || 0)
   }
})

const formatData = (nutrition) => ({
  type: "Week of April 17th",
  nutrition: nutrition.nutrition,
  date: "2016-04-17",
  photo: {
    uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD…H6Z/rWrofV/8Ari3/AKEtZniX/kKyfX+grKDvVt5BLY//2Q==",
    height: 500,
    width: 333,
  },
})

class MealHistory extends Component{
  constructor(props) {
    super(props)
    this.state = {
      database: props.database,
      meals: props.meals
    }
  }

  render() {
    return (
      <ScrollView>
        <MealCard key={"Week of April 17th"} meal={formatData(aggregateWeekNutrtion(this.props.meals))} />

      </ScrollView>
      )
  }
}

module.exports = connect(mapStateToProps)(MealHistory)
