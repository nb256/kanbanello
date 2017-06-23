import {combineReducers}  from 'redux';


function reducers(state = [], action) {

  switch (action.type) {
    case 'ADD_LANE':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          cards: action.cards
        }
      ]

    case 'UPDATE_LANE':
      return state.map(lane => {
        if(lane.id === action.id) {
          return Object.assign({}, lane,
          {
            title: action.title
          });
        }
        return lane;
      });

    case 'DELETE_LANE':
      return state.filter(lane => lane.id !== action.id);

    case 'ADD_CARD':
      return state.map(lane => {
        if(lane.id === action.laneid) {
          return Object.assign({}, lane,
          {
            cards: [...lane.cards,
            {
              id: action.id,
              title: action.title,
              note: action.note,
              labels: action.labels
            }]
          });
          return lane;
        }
        return lane;
      });

      case 'UPDATE_CARD':
        return state;

    default:
      return state;
  }
}


function cards(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

// export default combineReducers({
//   lanes,
//   cards
// });

export default reducers;
