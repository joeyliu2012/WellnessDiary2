import { AsyncStorage } from 'react-native'
import _ from 'lodash'
import moment from 'moment'
import { SAVE_MEAL } from './constants/ActionTypes'
import Dropbox from './xhr/Dropbox'

export const today = () => moment().startOf('day').format('YYYY-MM-DD')
export const yesterday = () => moment().startOf('day').subtract(1, 'days').format('YYYY-MM-DD')


export const persist = ({getState}) => next => action => {
  const o = getState().database
  const { dropbox } = getState()
  const shouldUpload = dropbox.isLoggedIn && dropbox.token
  const client = new Dropbox(dropbox.token)
  if (action.type === SAVE_MEAL) {
    AsyncStorage.getItem(action.payload.date, (err, result) => {
      const entry = JSON.stringify({
        ...JSON.parse(result),
        [action.payload.type]: action.payload,
      })
      AsyncStorage.setItem(action.payload.date, entry, () => {
        if (shouldUpload) {
          client.setItem(action.payload.date, entry)
        }
      })
    })
  }
  next(action)
  const n = getState().database
  console.log('checking database')
  if (!_.isEqual(o, n)) {
    AsyncStorage.setItem('database', JSON.stringify(n))
    console.log('set in async storage')
    if (shouldUpload) {
      client.setItem('database', JSON.stringify(n))
      console.log('set in dropbox')
    }
  }
}

