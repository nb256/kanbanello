import React from 'react';
import Label from './Label';
let id= 3000;

const deleteButtonStyle =  {
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
      title : this.props.card.title,
      labels: this.props.card.labels
    };
    this.addLabel = this.addLabel.bind(this);
    this.deleteLabel = this.deleteLabel.bind(this);
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
            {this.state.labels.map(label =>
                <Label key={label.id} label={label} onDelete={this.deleteLabel}/>)}
            </p>
          </div>
        </div>
      </div>
    );
  }

  addLabel() {
    id++;
    this.setState({
      labels: this.state.labels.concat([{
          id: id,
          text: 'newlab',
          color: 'blue'
      }])
    });
  }

  deleteLabel (id) {
    this.setState({
      labels: this.state.labels.filter(label => label.id !== id)
    });
  }

}
