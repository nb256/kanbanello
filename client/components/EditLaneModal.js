import React from 'react';

const submitButtonStyle =  {
    margin:"10px",
    float:"right"
};
const formElementsStyle = {
  margin: "40px",
  marginBottom: "50px",
  marginTop: "50px"

  }

export default class EditLaneModal extends React.Component{

  handleChange(e){
    e.preventDefault();
    this.props.onEditLane(this.props.lane.id, this.refs.title.value)
  }

  render(){
    this.handleChange = this.handleChange.bind(this);

    return (
    <div id={this.props.modalId} className="w3-modal">
      <div className="w3-modal-content w3-animate-top">
        <header className="w3-container w3-red">
          <span onClick={() => document.getElementById(this.props.modalId).style.display='none'}
          className="w3-button w3-display-topright">&times;</span>
          <h2>Update Lane</h2>
        </header>
        <form style={formElementsStyle} className="w3-container">
          <label><h4>Card Title</h4></label>
          <input className="w3-input" ref="title" value={this.props.lane.title}
          onChange={this.handleChange}/>
          <br/><br/>
        </form>
      </div>
    </div> );
  }
}
