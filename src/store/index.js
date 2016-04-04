import { createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import createLogger from 'redux-logger'
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
      })
    ),
    autoRehydrate()
  )
)
