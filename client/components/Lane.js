import React from 'react';
import Card from './Card';
let id=2000;
const laneStyle = {
  margin: "15px"
};
const deleteButtonStyle={
  position:"absolute",
  right:"10px",
  top:"8px"
};

export default class Lane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.lane.id,
      cards : this.props.lane.cards,
      title: this.props.lane.title
    };
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);

  }

  render() {
    return (
        <div className="w3-col m2 w3-center" style={laneStyle}>
          <div className="w3-tooltip">
            <span style={deleteButtonStyle} className="w3-text">
              <i className="fa fa-window-close" onClick={() => this.props.onDeleteLane(this.state.id)}>
              </i>
            </span>
            <header className="w3-container w3-light-grey">
              <h3>{this.state.title} </h3>
              <h5><span className="w3-badge">{this.state.cards.length}</span></h5>
            </header>
          </div>
            {this.state.cards.map(card =>
                <Card key={card.id} card={card} onDelete={this.deleteCard}/>)}

          <button className="w3-button w3-block w3-dark-grey" onClick={this.addCard}>+ Add a card</button>
        </div>
    );
  }

  addCard() {
    id++;
    this.setState({
      cards: this.state.cards.concat([{
          id: id,
          title: 'new caaard',
          note: 'new note'+id,
          labels: [
            {
              id: 1,
              text: 'exLabel3',
              color: 'green'
            }
          ]
      }])
    });
  }

  deleteCard (id) {
    this.setState({
      cards: this.state.cards.filter(card => card.id !== id)
    });
  }

}
