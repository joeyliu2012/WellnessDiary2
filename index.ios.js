/*
 * This file intializes the app and also handles
 * when the app has been open by dropbox to save
 * the dropbox auth token and keep the use signed
 * in.
 *
 */
import React, {
  AppRegistry,
  Component,
  StatusBar,
  AsyncStorage,
  Linking,
} from 'react-native'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import store from './src/store'
import { login } from './src/actions/dropbox'
import qs from 'query-string'

import Index from './src/pages'

StatusBar.setHidden(false)
StatusBar.setBarStyle('light-content')

class Root extends Component {
  componentDidMount() {
    Linking.addEventListener('url', this.handleURL)
    persistStore(store, {
      whitelist: ['database', 'dropbox'],
      storage: AsyncStorage,
    })
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleURL)
  }

  handleURL({url}) {
    const { access_token, uid } = qs.parse(url.split('#')[1])
    store.dispatch(login(access_token, uid))
  }

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('WellnessDiary2', () => Root)
