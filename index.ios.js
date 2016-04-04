import React, {
  AppRegistry,
  Component,
  StatusBar,
  AsyncStorage,
} from 'react-native'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import store from './src/store'

import Index from './src/pages'
import LoadingView from './src/components/LoadingView'

StatusBar.setHidden(false)
StatusBar.setBarStyle('light-content')

class Root extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { isLoading: true }
    this._persistor = null
  }

  componentWillMount() {
    this._persistor = persistStore(store, {
      storage: AsyncStorage,
    }, () => this.setState({ isLoading: false }))
  }

  render() {
    if (this.state.isLoading) {
      return (
        <LoadingView />
      )
    }
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('WellnessDiary2', () => Root)
