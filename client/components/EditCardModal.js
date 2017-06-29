import React from 'react';
import { floatRightButtonStyle, formElementsStyle, modalStyle } from '../styles/styles';
import Label from './Label';

export default class EditCardModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedColor: 'red',
    };
  }

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
    if (this.refs.labelText.value != '') {
      this.props.onCreateLabel(this.props.laneid, this.props.card.id,
        this.refs.labelText.value, this.state.selectedColor);
      this.refs.labelText.value = '';
    }
    document.getElementById(this.props.modalId).style.display = 'none';
  }

  setLabelColor(event) {
    this.state.selectedColor = event.target.value;
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
          <div className="w3-panel w3-leftbar w3-border-green w3-pale-green">
            <label><h4>Add New Label:</h4></label>
            <input className="w3-input" ref="labelText" />

            <div className="w3-row-padding" onChange={this.setLabelColor.bind(this)}>

              <div className="w3-quarter">
                <input className="w3-radio" type="radio" ref="labelColor"
                name="labelColor" value="red" defaultChecked />
            <span className="w3-tag w3-red">Red</span>
              </div>

            <div className="w3-quarter">
                <input className="w3-radio" type="radio" ref="labelColor"
                name="labelColor" value="blue" />
            <span className="w3-tag w3-blue">Blue</span>
              </div>

            <div className="w3-quarter">
                <input className="w3-radio" type="radio" ref="labelColor"
                name="labelColor" value="yellow" />
            <span className="w3-tag w3-yellow">Yellow</span>
              </div>

            <div className="w3-quarter">
                <input className="w3-radio" type="radio" ref="labelColor"
                name="labelColor" value="green" />
            <span className="w3-tag w3-green">Green</span>
              </div>
            </div>

            <button style={floatRightButtonStyle} className="w3-btn w3-green" type="submit">Add Label
            </button>
          </div>

          <div className="w3-panel w3-leftbar w3-border-red w3-pale-red">
            <h4>Delete Labels:</h4>
            <h6>(Click the label to delete)</h6>
            {this.props.card.labels.map(label =>
                <div key={label.id} className="w3-margin" onClick={() =>
                   this.props.onDeleteLabel(this.props.laneid, this.props.card.id, label.id)}>
                  <Label key={label.id} label={label}/>
                </div>)}
          </div>
          <br/><br/><br/>
        </form>
      </div>
    </div>
    );
  }
}
