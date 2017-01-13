import { createStore } from 'redux'

const reducer = (state, action) => {
  switch (action.type) {
    case 'BLAH':
      return {
        ...state,
        foo: 'bar',
      }
    default:
      return {
        ...state,
      }
  }
}

const initialState = {
  posts: [
    { title: 'some post 1', author: 'author 1', votes: 15 },
    { title: 'some post 2', author: 'author 2', votes: 15 },
  ],
}

const store = createStore(reducer, initialState)

export default store
