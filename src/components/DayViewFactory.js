import React, {
  Component,
  ScrollView,
} from 'react-native'
import _ from 'lodash/fp'
import { connect } from 'react-redux'
import MealCard from './MealCard'

const MEAL_TYPES = ['Breakfast', 'Lunch', 'Dinner']

const mapStateToProps = (date) => (state) => ({
  meals: state.meals[date],
})

const DayViewFactory = (date) => (
  connect(
    mapStateToProps(date)
  )((props, context) => {
    const meals = _.map((type) => _.get(type, props.meals) || ({ type, date }), MEAL_TYPES)
    const renderMeals = _.map((meal) => <MealCard key={meal.type} meal={meal} />)
    return (
      <ScrollView>
        {renderMeals(meals)}
      </ScrollView>
    )
  })
)

export default DayViewFactory
