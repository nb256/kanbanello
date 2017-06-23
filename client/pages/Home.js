import React from 'react';
import Lane from '../components/Lane';
import store from '../store';
import {connect} from 'react-redux';



// console.log(store.getState())
const action = {
    type: 'ADD_CARD',
      laneid: 800,
      id: 1000,
      title: 'tittt',
      note: 'noteeee',
      labels: []
  }
store.dispatch(action)
const actio2n = {
    type: 'ADD_LANE',
      id: 10011,
      title: 'tittt',
      cards: []
  }
store.dispatch(actio2n)

// console.log(store.getState())


let id= 1000000;


class Home extends React.Component {
  constructor(props) {
    super(props);

  //   this.state = {
  //   lanes: store.getState()
  // };

    // store.subscribe(() => {
    //   this.setState({
    //     lanes: store.getState
    //   });
    // });
    // let unsubscribe = store.subscribe(this.render)
    this.deleteLane = this.deleteLane.bind(this);
    this.addLane = this.addLane.bind(this);
  }
  render() {
    const state = store.getState();
    return (
      <div>
        <button className="w3-button w3-black" onClick={this.addLane}>+ New Lane</button>
        <button className="w3-button w3-black" onClick="" >+ New Card</button>
        <div className="w3-row">
          {state.map(lane =>
            <Lane key={lane.id} lane={lane} onDelete={this.deleteLane} />
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

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
