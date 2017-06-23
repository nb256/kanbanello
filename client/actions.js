import React from 'react';

let id= 1000000;


const mapStateToProps = (state) => ({
allLanes: state
});

const mapDispatchToProps = (dispatch) => ({
onCreateLane() {
  id++;
  dispatch({
      type: 'ADD_LANE',
        id: id,
        title: 'tittt',
        cards: []
    });
},
onDeleteLane(laneId) {
  dispatch({
      type: 'DELETE_LANE',
        id: laneId
    });
},

onEditLane(laneId, title) {
  dispatch({
      type: 'UPDATE_LANE',
        id: laneId,
        title
    });
},

onCreateCard(laneid, card)
{
  id++;
  const cardid=id;
  dispatch({
      type: 'ADD_CARD',
      laneid,
      cardid,
      card
    });
},

onEditCard(laneId, card)
{
  dispatch({
      type: 'UPDATE_CARD',
      laneid: laneId,
      card
    });
},
onDeleteCard(laneid, id)
{
  dispatch({
      type: 'DELETE_CARD',
      laneid,
      id
    });
}

});

export default {
mapStateToProps,
mapDispatchToProps};
