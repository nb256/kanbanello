import { createStore } from 'redux'
import rootReducer from './reducers';

let defaultState;

try{
  const serializedState = localStorage.getItem('state');
  if(serializedState === null)
  {
    defaultState = [
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
  }
  else{
    defaultState = JSON.parse(serializedState)
  }
} catch (err)
{
  console.log('localStorage failed for some reason:'+ err);
}

let store = createStore(rootReducer, defaultState)

try{
  const serializedState = JSON.stringify(store.getState());
  localStorage.setItem('state', serializedState);
}catch (err)
{
  console.log('localStorage failed for some reason:'+ err);
}
store.subscribe(() => {
  try{
    const serializedState = JSON.stringify(store.getState());
    localStorage.setItem('state', serializedState);
  }catch (err)
  {
    console.log('localStorage failed for some reason:'+ err);
  }
});

export default store;
