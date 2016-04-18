import {
  LOG_IN,
  LOG_OUT,
} from '../constants/ActionTypes'


const dropbox = (
  // state = {
  //   token: null,
  //   isLoggedIn: false,
  // },
  state = {
    token: 'UW2D3lb3nvkAAAAAAAArlP-BxrCwSVTpuCqUF3FnEa5zFMjflNKZtJP5uz3vH8yz',
    isLoggedIn: true,
  },
  action
) => {
  switch (action.type) {
    case LOG_IN:
      return {
        isLoggedIn: true,
        token: action.payload.token,
      }
    case LOG_OUT:
      return {
        isLoggedIn: false,
        token: null,
      }
    default:
      return state
  }
}

export default dropbox
