import React, {
  Component,
  ScrollView,
} from 'react-native'
import Images from '../constants/Images'
import MealCard from './MealCard'

const DayViewFactory = (date) => (
  class DayView extends Component {
    render() {
      return (
        <ScrollView>
          <MealCard title="Breakfast" meal={{
            photo: Images['Fixture-meal-image'],
          }}/>
          <MealCard title="Lunch"/>
          <MealCard title="Dinner"/>
          <MealCard title="Snacks"/>
        </ScrollView>
      )
    }
  }
)

export default DayViewFactory

