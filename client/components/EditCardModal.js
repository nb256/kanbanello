import React from 'react';
import { floatRightButtonStyle, formElementsStyle, modalStyle } from '../styles/styles';

export default class EditCardModal extends React.Component {

  handleChange(e) {
    e.preventDefault();
    this.props.onEditCard(this.props.laneid, {
      id: this.props.card.id,
      title: this.refs.title.value,
      note: this.refs.note.value,
      labels: this.props.card.labels
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onCreateLabel(this.props.laneid, this.props.card.id, this.refs.labelText.value, 'red')
    document.getElementById(this.props.modalId).style.display = 'none';
  }

  render() {
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    return (

    <div id={this.props.modalId} className="w3-modal" style={modalStyle}>
      <div className="w3-modal-content w3-animate-top">
        <header className="w3-container w3-red">
          <span onClick={() => document.getElementById(this.props.modalId).style.display = 'none'}
          className="w3-button w3-display-topright">&times;</span>
          <h2>Update Card</h2>
        </header>
        <form style={formElementsStyle} className="w3-container" onSubmit={this.handleSubmit}>
          <label><h4>Card Title</h4></label>
          <input className="w3-input" ref="title" value={this.props.card.title}
          onChange={this.handleChange}/>
          <label><h4>Card Note</h4></label>
          <input className="w3-input" ref="note" value={this.props.card.note}
          onChange={this.handleChange}/>
          <br/>
          <label><h4>Add Label:</h4></label>
          <input className="w3-input" ref="labelText" />
          <button style={floatRightButtonStyle} className="w3-btn w3-green" type="submit">Add Label
          </button>
          <br/><br/><br/>
        </form>
      </div>
    </div>
    );
  }
}
