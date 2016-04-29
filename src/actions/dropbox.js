import {
  LOG_IN,
  LOG_OUT,
} from '../constants/ActionTypes'


// Login action creator
export const login = (token, uid) => ({
  type: LOG_IN,
  payload: { token, uid },
})

// Logout action creator
export const logout = () => ({
  type: LOG_OUT,
  payload: {},
})
