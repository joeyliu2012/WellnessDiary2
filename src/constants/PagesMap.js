import React from 'react-native'
import moment from 'moment'
import ComingSoon from '../pages/ComingSoon'
import DayViewFactory from '../components/DayViewFactory'

export default {
  'Today': () => React.createElement(DayViewFactory(moment().startOf('day'))),
  'Yesterday': () => React.createElement(DayViewFactory(moment().startOf('day').subtract(1, 'days'))),
  'History': () => <ComingSoon />,
  'Settings': () => <ComingSoon />,
}
