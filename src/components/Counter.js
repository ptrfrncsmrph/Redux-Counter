import React from "react"
import { connect } from "react-redux"
import { increment, decrement, reset } from "../actions"

const Counter = ({ count, increment, decrement }) => {
  const incrementIfOdd = () => count % 2 !== 0 && increment()
  const incrementAsync = () => setTimeout(increment, 1000)
  return (
    <p>
      Clicked: {count} times
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementIfOdd}>Increment if odd</button>
      <button onClick={incrementAsync}>Increment async</button>
    </p>
  )
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = ({ count }) => ({
  count
})

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.

export default connect(
  mapStateToProps,
  { increment, decrement, reset }
)(Counter)
