import React, {
  AppRegistry,
  Component,
  StatusBar,
  AsyncStorage,
} from 'react-native'
import { Provider } from 'react-redux'
import store from './src/store'

import Index from './src/pages'

StatusBar.setHidden(false)
StatusBar.setBarStyle('light-content')

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('WellnessDiary2', () => Root)
