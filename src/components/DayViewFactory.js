import React, {
  Component,
  ScrollView,
} from 'react-native'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import MealCard from './MealCard'

const mapStateToProps = (date) => (state) => ({
  meals: state.get('meals').get(date) || new Map({
    'Breakfast': null,
    'Lunch': null,
    'Dinner': null,
    'Snacks': null,
  })
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
            .map(([key, value]) => <MealCard key={key} title={key} />)
          }
        </ScrollView>
      )
    }
  })
)

export default DayViewFactory

