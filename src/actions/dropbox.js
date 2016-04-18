import {
  LOG_IN,
  LOG_OUT,
} from '../constants/ActionTypes'


export const login = (token, uid) => ({
  type: LOG_IN,
  payload: { token, uid },
})

export const logout = () => ({
  type: LOG_OUT,
  payload: {},
})
