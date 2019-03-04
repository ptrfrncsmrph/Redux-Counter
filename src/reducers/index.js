import { INCREMENT, DECREMENT, RESET } from "../actions"
import { combineReducers } from "redux"

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?

const count = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    case RESET:
      return 0
    default:
      return state
  }
}

const other = (state = "Hello", _action) => {
  return state
}

export default combineReducers({
  count,
  other
})

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { count: state.count + 1 }
//     case DECREMENT:
//       return { count: state.count - 1 }
//     case RESET:
//       return { count: 0 }
//     default:
//       return state
//   }
// }
