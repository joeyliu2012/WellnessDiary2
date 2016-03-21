import { createStore, applyMiddleware } from 'redux'
import { Iterable, Map } from 'immutable'
import createLogger from 'redux-logger'
import reducer from '../reducers'

export default createStore(
  reducer,
  new Map(),
  applyMiddleware(
    createLogger({
      actionTransformer: (action) => ({
        ...action,
        type: String(action.type),
      }),
      stateTransformer: (state) => {
        if (Iterable.isIterable(state)) return state.toJS()
        return state
      },
    })
  )
)
