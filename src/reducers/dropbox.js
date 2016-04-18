import {
  LOG_IN,
  LOG_OUT,
} from '../constants/ActionTypes'


const dropbox = (
  state = {
    token: null,
    uid: null,
    isLoggedIn: false,
  },
  action
) => {
  switch (action.type) {
    case LOG_IN:
      return {
        isLoggedIn: true,
        token: action.payload.token,
        uid: action.payload.uid,
      }
    case LOG_OUT:
      return {
        isLoggedIn: false,
        token: null,
        uid: null,
      }
    default:
      return state
  }
}

export default dropbox
