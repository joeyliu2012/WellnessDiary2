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
<<<<<<< 9b7036c1b8de012bf9bf2b3dc4edcfda686aee85
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
=======

    connect(
      mapStateToProps(date),
      null,
      null,
      { pure: true }
    )(class DayView extends Component {
    render() {
      const { meals } = this.props
      return (
        <ScrollView>
          {MEAL_TYPES.map((type) => meals.get(type, { date, type }))
            .map((meal) => <MealCard key={meal.type} meal={meal} />)}
        </ScrollView>
      )
    }
>>>>>>> WIP - cleanup.
  })
)

export default DayViewFactory
