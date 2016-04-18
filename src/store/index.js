import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import { autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
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
      thunk,
    ),
    autoRehydrate()
  )
)
