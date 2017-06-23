// import {combineReducers}  from 'redux';


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
        if(lane.id == action.id) {
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
        if(lane.id == action.laneid) {
          action.card.id = action.cardid;
          return Object.assign({}, lane,
          {
            cards: [...lane.cards,
            action.card]
          });
        }
        return lane;
      });

      case 'UPDATE_CARD':

      return state.map(lane => {
        if(lane.id == action.laneid) {
            return lane.cards.map(card => {
              if(card.id == action.card.id)
              {
                return action.card;
              }
              return card;
            })
        }
        return lane;
      });

      case 'DELETE_CARD':
      return state.map(lane => {
        if(lane.id === action.laneid) {
          lane.cards = lane.cards.filter(card => card.id !== action.id);
        }
        return lane;
      });

    default:
      return state;
  }
}


export default reducers;
