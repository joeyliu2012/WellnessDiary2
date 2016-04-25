import { HISTORY_FETCHED } from '../constants/ActionTypes'

export default (
  state = {},
  action
) => {
  switch (action.type) {
    case HISTORY_FETCHED:
      return {
        ...state,
        [action.payload.week]: action.payload.data,
      }
    default:
      return state
  }
}
