import { AsyncStorage } from 'react-native'
import _ from 'lodash'
import moment from 'moment'
import { SAVE_MEAL } from './constants/ActionTypes'
import Dropbox from './xhr/Dropbox'

export const today = () => moment().startOf('day').format('YYYY-MM-DD')
export const yesterday = () => moment().startOf('day').subtract(1, 'days').format('YYYY-MM-DD')


export const persist = ({getState}) => next => action => {
  const { dropbox, database } = getState()
  const shouldUpload = dropbox.isLoggedIn && dropbox.token
  const client = new Dropbox(dropbox.token)
  if (action.type === SAVE_MEAL) {
    AsyncStorage.getItem(action.payload.date, (err, result) => {
      const entry = JSON.stringify({
        ...JSON.parse(result),
        [action.payload.type]: action.payload,
      })
      AsyncStorage.setItem(action.payload.date, entry, () => {
        next(action)
        if (shouldUpload) {
          client.setItem(action.payload.date, entry)
        }
      })
    })
  } else {
    next(action)
  }
  if (shouldUpload && !_.isEqual(database, getState().database)) {
    client.setItem('database', JSON.stringify(getState().database))
  }
}

