function reducers(state = [], action) {

  switch (action.type) {

  case 'ADD_LANE':
    return [
      ...state,
      {
        id: action.id,
        title: action.title,
        cards: action.cards,
      },
    ];

  case 'UPDATE_LANE':
    return state.map(lane => {
      if (lane.id == action.id) {
        return Object.assign({}, lane,
          {
            title: action.title,
          });
      }
      return lane;
    });

  case 'DELETE_LANE':
    return state.filter(lane => lane.id !== action.id);

  case 'ADD_CARD':
    console.log('1');
    return state.map(lane => {console.log(lane.id+' - '+ action.laneid);
      if (lane.id == action.laneid) {
        console.log('2');
        action.card.id = action.cardid;
        return Object.assign({}, lane,
          {
            cards: [...lane.cards,
              action.card],
          });
      }
      return lane;
    });

  case 'UPDATE_CARD':

    return state.map(lane => {
      if (lane.id == action.laneid) {
        const newCards = lane.cards.map(card => {
          if (card.id == action.card.id) {
            return action.card;
          }
          return card;
        });
        return Object.assign({}, lane,
          {
            cards: newCards,
          });
      }
      return lane;
    });

  case 'DELETE_CARD':
    return state.map(lane => {
      if (lane.id === action.laneid) {
        lane.cards = lane.cards.filter(card => card.id !== action.id);
      }
      return lane;
    });

  case 'ADD_LABEL':
    return state.map(lane => {
      if (lane.id == action.laneid) {
        const newCards = lane.cards.map(card => {
          if (card.id == action.cardid) {
            const newLabels = [...card.labels, action.label];
            return Object.assign({}, card,
              {
                labels: newLabels,
              });
          }
          return card;
        });
        return Object.assign({}, lane,
          {
            cards: newCards,
          });
      }
      return lane;
    });

  case 'DELETE_LABEL':
    return state.map(lane => {
      if (lane.id == action.laneid) {
        const newCards = lane.cards.map(card => {
          if (card.id == action.cardid) {
            const newLabels = card.labels.filter(label =>
            label.id != action.labelid);

            return Object.assign({}, card,
              {
                labels: newLabels,
              });
          }
          return card;
        });
        return Object.assign({}, lane,
          {
            cards: newCards,
          });
      }
      return lane;
    });

  default:
    return state;
  }
}

export default reducers;
