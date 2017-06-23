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
  constructor(props) {
    super(props);
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  handleKeypress(e){

  }

  render(){
    console.log(this.props)
    return (
    <div id={this.props.modalId} className="w3-modal">
      <div className="w3-modal-content w3-animate-top">
        <header className="w3-container w3-red">
          <span onClick={() => document.getElementById(this.props.modalId).style.display='none'}
          className="w3-button w3-display-topright">&times;</span>
          <h2>New Card</h2>
        </header>
        <form style={formElementsStyle} className="w3-container" >
          <label>Select Lane to Add a Card</label>
          <select className="w3-select" >
            {this.props.allLanes.map(lane =>
            <option key={lane.id} value={lane.id}>{lane.title}</option>)}
          </select>
          <br/><br/><br/>
          <label>Card Title</label>
          <input className="w3-input" onKeyPress={this.handleKeypress}/>

          <label>Card Note</label>
          <input className="w3-input" onKeyPress={this.handleKeypress}/>

        </form>
        <footer className="w3-container w3-red">
          <button style={submitButtonStyle} className="w3-button w3-blue" type="submit">
          Add Card
          </button>
        </footer>
      </div>
    </div> );
  }
}
