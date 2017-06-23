import React from 'react';
import Lane from '../components/Lane';
import {connect} from 'react-redux';



// console.log(store.getState())
// const action = {
//     type: 'ADD_CARD',
//       laneid: 800,
//       id: 1000,
//       title: 'tittt',
//       note: 'noteeee',
//       labels: []
//   }
// store.dispatch(action)
// const actio2n = {
//     type: 'ADD_LANE',
//       id: 10011,
//       title: 'tittt',
//       cards: []
//   }
// store.dispatch(actio2n)

// console.log(store.getState())


let id= 1000000;

console.log(this.props.U)




class Home extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    console.log(this.props)
    return (
      <div>
        <button className="w3-button w3-black" onClick={this.onCreateLane}>+ New Lane</button>
        <button className="w3-button w3-black" onClick="" >+ New Card</button>
        <div className="w3-row">
        {this.props.allLanes.map(lane =>
          <Lane key={lane.id} lane={lane} onDeleteLane={this.props.onDeleteLane} />
        )}

        </div>
      </div>
    );
  }

}




  // addLane() {
  //   id++;
  //   this.setState({
  //     lanes: this.state.lanes.concat([{
  //         id: id,
  //         title: 'Lane'+id,
  //         cards: [
  //           {
  //             id: 1,
  //             title: 'new card',
  //             note: 'Learn Rasdfeact',
  //             labels: [
  //               {
  //                 id: 1,
  //                 text: 'exLabel3',
  //                 color: 'green'
  //               }
  //             ]
  //           }
  //         ]
  //     }])
  //   });
  // }
  //
  // deleteLane (lid) {
  //   // this.setState({
  //   //   lanes: this.state.lanes.filter(lane => lane.id !== id)
  //   // });
  //   console.log(store.getState())
  //   const action = {
  //       type: 'DELETE_LANE',
  //         id: lid
  //     }
  //   store.dispatch(action)
  //   console.log(store.getState())
  //
  // }

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

  onEditLane(laneId, value) {
    dispatch({
        type: 'UPDATE_LANE',
          id: laneId,
          title: value
      });
  },

  onCreateCard(laneId, card)
  {
    dispatch({
        type: 'ADD_CARD',
        laneid: laneId,
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
  onDeleteCard(laneId, id)
  {
    dispatch({
        type: 'DELETE_CARD',
        laneid: laneId,
        id
      });
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
