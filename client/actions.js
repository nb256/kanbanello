const getRandomIntegerFromDate = () => {
  return new Date().valueOf();
};

const mapStateToProps = (state) => ({
  allLanes: state,
});

const mapDispatchToProps = (dispatch) => ({
  onCreateLane() {
    dispatch({
      type: 'ADD_LANE',
      id: getRandomIntegerFromDate(),
      title: 'New Lane',
      cards: [],
    });
  },
  onDeleteLane(laneId) {
    dispatch({
      type: 'DELETE_LANE',
      id: laneId,
    });
  },
  onEditLane(laneId, title) {
    dispatch({
      type: 'UPDATE_LANE',
      id: laneId,
      title,
    });
  },
  onCreateCard(laneid, card) {
    dispatch({
      type: 'ADD_CARD',
      laneid,
      cardid: getRandomIntegerFromDate(),
      card,
    });
  },

  onEditCard(laneid, card) {
    dispatch({
      type: 'UPDATE_CARD',
      laneid,
      card,
    });
  },

  onDeleteCard(laneid, id) {
    dispatch({
      type: 'DELETE_CARD',
      laneid,
      id,
    });
  },

  onCreateLabel(laneid, cardid, text, color) {
    dispatch({
      type: 'ADD_LABEL',
      laneid,
      cardid,
      label: {
        id: getRandomIntegerFromDate(),
        text,
        color,
      },
    });
  },

  onDeleteLabel(laneid, cardid, labelid) {
    dispatch({
      type: 'DELETE_LABEL',
      laneid,
      cardid,
      labelid,
    });
  },

  onMoveCard(laneid, targetlaneid, card) {
    dispatch({
      type: 'DELETE_CARD',
      laneid,
      id: card.id,
    });
    dispatch({
      type: 'ADD_CARD',
      laneid: targetlaneid,
      cardid: card.id,
      card,
    });
  },

});

export default {
  mapStateToProps,
  mapDispatchToProps };
