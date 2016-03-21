import React, {
  AppRegistry,
  Component,
  StatusBarIOS,
} from 'react-native'

import Index from './src/pages'

StatusBarIOS.setHidden(false)
StatusBarIOS.setStyle('light-content')
const Root = () => <Index />

AppRegistry.registerComponent('WellnessDiary2', () => Root)
