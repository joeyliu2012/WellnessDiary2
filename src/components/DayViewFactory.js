import React, {
  Component,
  ScrollView,
} from 'react-native'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import MealCard from './MealCard'

import Images from '../constants/Images'

const MEAL_TYPES = ['Breakfast', 'Lunch', 'Dinner', 'Snacks']

const mapStateToProps = (date) => (state) => ({
  meals: state.get('meals').get(date, new Map())
})

const DayViewFactory = (date) => (
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
  })
)

export default DayViewFactory

          // {meals
          //   .entrySeq()
          //   .map(([type, meal]) =>
          //        <MealCard
          //          key={type}
          //          meal={_.isEmpty(meal)
          //            ? { date, type }
          //            : meal
          //          }
          //        />)
