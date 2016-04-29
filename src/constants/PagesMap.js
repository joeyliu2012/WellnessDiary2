import React from 'react-native'
import Settings from '../pages/Settings'
import DayViewFactory from '../components/DayViewFactory'
import MealHistory from '../components/HistoryView'
import { today, yesterday } from '../Utils'

export default {
  Today: () => React.createElement(DayViewFactory(today())),
  Yesterday: () => React.createElement(DayViewFactory(yesterday())),
  History: () => <MealHistory />,
  Settings: () => <Settings />,
}
