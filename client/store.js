import { createStore } from 'redux'
import rootReducer from './reducers';

const defaultState = [
  {
    id: uuid.v4(),
    name: 'Todo',
    notes: [],
  },
  {
    id: uuid.v4(),
    name: 'In Progress',
    notes: [],
  },
  {
    id: uuid.v4(),
    name: 'Review',
    notes: [],
  },
];

let store = createStore(rootReducer, defaultState)

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
})

console.log(store.getState())
