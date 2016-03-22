import React, {
  Component,
  ScrollView,
} from 'react-native'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import MealCard from './MealCard'

import Images from '../constants/Images'

const mapStateToProps = (date) => (state) => ({
  meals: state.get('meals').get(date, new Map({
    'Breakfast': null,
    'Lunch': null,
    'Dinner': null,
    'Snacks': null,
  }))
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
          {meals
            .entrySeq()
            .map(([type, meal]) =>
                 <MealCard
                   key={type}
                   meal={_.isEmpty(meal)
                     ? { date, type }
                     : meal
                   }
                 />)
          }
        </ScrollView>
      )
    }
  })
)

export default DayViewFactory

