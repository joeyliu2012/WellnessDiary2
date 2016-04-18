import { combineReducers } from 'redux'

import dropbox from './dropbox'
import database from './database'

export default combineReducers({
  dropbox,
  database,
})
