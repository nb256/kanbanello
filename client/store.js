import { createStore } from 'redux'
import rootReducer from './reducers';

const defaultState = [
  {
    id: 800,
    title: 'Lane OnASDASDe',
    cards: [
      {
        id: 1800,
        title: 'Card One',
        note: 'Learn React',
        labels: [
          {
            id: 2800,
            text: 'exLabel',
            color: 'blue'
          }
        ]
      },
      {
        id: 1801,
        title: 'Card Two',
        note: 'Do laundry',
        labels: [
          {
            id: 2801,
            text: 'exLabel2',
            color: 'red'
          }
        ]
      }
    ]
  }      

];

let store = createStore(rootReducer, defaultState)

export default store;
