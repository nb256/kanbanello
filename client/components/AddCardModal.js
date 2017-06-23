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

export default class AddCardModal extends React.Component{

  handleSubmit(e){
    e.preventDefault();
    const laneid = this.refs.lane.options[this.refs.lane.selectedIndex].value;
    this.props.onCreateCard(laneid,{
      id:213,
      title: this.refs.title.value,
      note: this.refs.note.value,
      labels:[]
    })
    document.getElementById(this.props.modalId).style.display='none'
  }

  render(){
    this.handleSubmit = this.handleSubmit.bind(this);

    return (
    <div id={this.props.modalId} className="w3-modal">
      <div className="w3-modal-content w3-animate-top">
        <header className="w3-container w3-red">
          <span onClick={() => document.getElementById(this.props.modalId).style.display='none'}
          className="w3-button w3-display-topright">&times;</span>
          <h2>New Card</h2>
        </header>
        <form style={formElementsStyle} className="w3-container" onSubmit={this.handleSubmit}>
          <label><h4>Select Lane to Add a Card</h4></label>
          <select className="w3-select" ref="lane">
            {this.props.allLanes.map(lane =>
            <option key={lane.id} value={lane.id}>{lane.title}</option>)}
          </select>
          <br/>
          <label><h4>Card Title</h4></label>
          <input className="w3-input" ref="title"/>

          <label><h4>Card Note</h4></label>
          <input className="w3-input" ref="note" />
          <br/><br/>

        <footer className="w3-container w3-red">
          <button style={submitButtonStyle} className="w3-btn w3-green" type="submit">
          Add Card
          </button>
        </footer>
        </form>
      </div>
    </div> );
  }
}
