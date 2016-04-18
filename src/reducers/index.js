import { combineReducers } from 'redux'

import meals from './meals'
import loading from './loading'
import dropbox from './dropbox'
import database from './database'

export default combineReducers({
  meals,
  loading,
  dropbox,
  database,
})
