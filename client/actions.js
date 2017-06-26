const mapStateToProps = (state) => ({
  allLanes: state,
});

const mapDispatchToProps = (dispatch) => ({
  onCreateLane() {
    dispatch({
      type: 'ADD_LANE',
      id: new Date().getUTCMilliseconds(),
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
      cardid: new Date().getUTCMilliseconds(),
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

  onCreateLabel(laneid, cardid, value) {
    dispatch({
      type: 'ADD_LABEL',
      laneid,
      cardid,
      label: {
        id: new Date().getUTCMilliseconds(),
        text: value,
        color: 'blue',
      },
    });
  },

});

export default {
  mapStateToProps,
  mapDispatchToProps };
