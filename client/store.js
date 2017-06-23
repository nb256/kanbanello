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
        title: 'Example Lane Title',
        cards: [
          {
            id: 1800,
            title: 'Example Card One',
            note: 'Learn React',
            labels: [
              {
                id: 2800,
                text: 'Example Label One',
                color: 'blue'
              }
            ]
          },
          {
            id: 1801,
            title: 'Example Card Two',
            note: 'Learn Redux',
            labels: [
              {
                id: 2801,
                text: 'Example Label Two',
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
