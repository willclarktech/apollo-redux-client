import { createStore } from 'redux'

const store = createStore((state, action) => {
  switch (action.type) {
    case 'BLAH':
      return {
        foo: 'bar',
      }
    default:
      return {
        foo: 'baz',
      }
  }
})

export default store
