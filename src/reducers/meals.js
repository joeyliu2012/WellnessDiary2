import {
  SAVE_MEAL,
} from '../constants/ActionTypes'
import { Map } from 'immutable'


//  meals: {
//    [date]: {
//      'Breakfast': ...
//      'Lunch': ...
//         ...
//    }
//    
//  meal: {
//    photo: ?String
//    nutrition: {
//      carbs: 
//      fat:
//      fiber:
//      protein:
//    },
//    location: {
//      name: ?String,
//      lat:
//      lon:
//    }
//  }

const meals = (state = new Map(), action) => {
  switch (action.type) {
  case SAVE_MEAL:
    return state.mergeDeep(
      new Map().set(
        action.payload.date,
        new Map().set(
          action.payload.type,
          action.payload
        )
      )
    )
  default:
    return state
  }
}

export default meals
