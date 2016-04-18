import _ from 'lodash'
import { SAVE_MEAL } from '../constants/ActionTypes'


const database = (
  state = [],
  action,
) => {
  switch (action.type) {
    case SAVE_MEAL:
      return _.uniq([...state, action.payload.date])
    default:
      return state
  }
}


export default database
