import React, {
  AppRegistry,
  Component,
  StatusBarIOS,
} from 'react-native'
import { Provider } from 'react-redux'
import store from './src/store'

import Index from './src/pages'

StatusBarIOS.setHidden(false)
StatusBarIOS.setStyle('light-content')
const Root = () => (
  <Provider store={store}>
    <Index />
  </Provider>
)

AppRegistry.registerComponent('WellnessDiary2', () => Root)
