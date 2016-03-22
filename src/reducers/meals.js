import {
  ADD_MEAL,
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
  case ADD_MEAL:
    return state.merge(action.payload)
  default:
    return state
  }
}

export default meals
