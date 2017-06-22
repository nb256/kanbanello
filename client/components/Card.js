import React from 'react';
const deleteButtonStyle={
  position:"absolute",
  right:"10px",
  top:"8px"
};
export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.card.id,
      note : this.props.card.note,
      title : this.props.card.title
    };

  }

  render() {
    return (
      <div className="w3-card-4">
        <div className="w3-tooltip">
          <span style={deleteButtonStyle} className="w3-text">
            <i className="fa fa-window-close" onClick={() => this.props.onDelete(this.state.id)}>
            </i>
          </span>
          <div className="w3-container">
            <h4>{this.state.title}</h4>
            <hr/>
            <p>{this.state.note}</p>
            <hr/>
            <p>
              <span className="w3-tag w3-blue">New!</span>
              <span className="w3-tag w3-red">New2!</span>
            </p>
          </div>
        </div>
      </div>
    );
  }



}
