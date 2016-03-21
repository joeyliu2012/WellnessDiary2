import React from 'react-native'
import ComingSoon from '../pages/ComingSoon'
import DayViewFactory from '../components/DayViewFactory'

export default {
  'Today': () => React.createElement(DayViewFactory(null)),
  'Yesterday': () => <ComingSoon />,
  'History': () => <ComingSoon />,
  'Settings': () => <ComingSoon />,
}
