import { createStore } from 'redux'

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const defaults = {}

function Store(initialState = defaults) {
  return createStore(reducer, initialState)
}

export default Store
