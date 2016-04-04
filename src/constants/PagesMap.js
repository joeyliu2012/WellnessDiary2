import React from 'react-native'
import ComingSoon from '../pages/ComingSoon'
import Settings from '../pages/Settings'
import DayViewFactory from '../components/DayViewFactory'
import { today, yesterday } from '../Utils'

export default {
  'Today': () => React.createElement(DayViewFactory(today())),
  'Yesterday': () => React.createElement(DayViewFactory(yesterday())),
  'History': () => <ComingSoon />,
  'Settings': () => <Settings />,
}
