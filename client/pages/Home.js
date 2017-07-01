import React from 'react';
import Lane from '../components/Lane';
import { connect } from 'react-redux';
import AddCardModal from '../components/addCardModal';
import actions from '../actions';
import { floatRightButtonStyle } from '../styles/styles';

const addCardModalId = new Date().getUTCMilliseconds();

class Home extends React.Component {

  ClearLocalStorage() {
    localStorage.clear();
    location.reload();
  }

  render() {
    return (
      <div>
        <AddCardModal allLanes={this.props.allLanes} modalId={addCardModalId}
        onCreateCard={this.props.onCreateCard}/>

        <button className="w3-button w3-black" onClick={() =>
          this.props.onCreateLane()}>+ New Lane</button>
        <button className="w3-button w3-black" onClick={() =>
          document.getElementById(addCardModalId).style.display = 'block'} >
          + New Card</button>

        <div className="w3-row" >
        {this.props.allLanes.map(lane =>
          <Lane key={lane.id} lane={lane} onDeleteLane={this.props.onDeleteLane}
          onCreateCard={this.props.onCreateCard} onDeleteCard={this.props.onDeleteCard}
          onEditLane={this.props.onEditLane} onEditCard={this.props.onEditCard}
          onCreateLabel={this.props.onCreateLabel} onDeleteLabel={this.props.onDeleteLabel}
          onMoveCard={this.props.onMoveCard}/>
        )}

        </div>
        <button style={floatRightButtonStyle} className="w3-button w3-red"
        onClick={this.ClearLocalStorage}> Clear LocalStorage</button>
      </div>
    );
  }

}

export default connect(actions.mapStateToProps, actions.mapDispatchToProps)(Home);
