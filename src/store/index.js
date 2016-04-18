import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import { persist } from '../Utils'
import reducer from '../reducers'

export default createStore(
  reducer,
  {},
  compose(
    applyMiddleware(
      createLogger({
        actionTransformer: (action) => ({
          ...action,
          type: String(action.type),
        })
      }),
      persist,
    )
  )
)
