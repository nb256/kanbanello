import React from 'react';
import Lane from '../components/Lane';
import {connect} from 'react-redux';
import AddCardModal from '../components/addCardModal';
import actions from '../actions';


let addCardModalId = "id123123";
let editLaneModalId = "id123125";

class Home extends React.Component {
  constructor(props) {
    super(props);


  }
  render() {
    console.log(this.props)


    return (
      <div>
        <AddCardModal  allLanes={this.props.allLanes} modalId={addCardModalId}
        onCreateCard={this.props.onCreateCard}/>

        <button className="w3-button w3-black" onClick={() =>
          this.props.onCreateLane()}>+ New Lane</button>
        <button  className="w3-button w3-black"  onClick={() =>
          document.getElementById(addCardModalId).style.display='block'} >
          + New Card</button>
        <div className="w3-row" >
        {this.props.allLanes.map(lane =>
          <Lane key={lane.id} lane={lane} onDeleteLane={this.props.onDeleteLane}
          onCreateCard={this.props.onCreateCard} onDeleteCard={this.props.onDeleteCard}
          editLaneModalId={editLaneModalId} onEditLane={this.props.onEditLane}/>
        )}

        </div>
      </div>
    );
  }

}

export default connect(actions.mapStateToProps,actions.mapDispatchToProps)(Home);
