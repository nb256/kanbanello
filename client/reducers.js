import {combineReducers}  from 'redux';


function cards(state = [], action) {
  switch (action.type) {
    case 'CREATE_CARD':
      return state.concat(action.payload);

    case actionTypes.UPDATE_NOTE:
      return state.map(note => {
        if(note.id === action.payload.id) {
          return Object.assign({}, note, action.payload);
        }
        return note;
      });

    case actionTypes.DELETE_NOTE:
      return state.filter(note => note.id !== action.payload.id);

    default:
      return state;
  }
}


function lanes(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

export default combineReducers({
  lanes,
  cards
});
