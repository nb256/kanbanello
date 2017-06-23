import React from 'react';
import Card from './Card';
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
    //
    // this.state = {
    //   id: this.props.lane.id,
    //   cards : this.props.lane.cards,
    //   title: this.props.lane.title
    // };
    // this.addCard = this.addCard.bind(this);
    // this.deleteCard = this.deleteCard.bind(this);
  }

  render() {
    return (
        <div className="w3-col m2 w3-center" style={laneStyle}>
          <div className="w3-tooltip">
            <span style={deleteButtonStyle} className="w3-text">
              <i className="fa fa-window-close" onClick={() =>
                 this.props.onDeleteLane(this.props.lane.id)}>
              </i>
            </span>
            <header className="w3-container w3-light-grey">
              <h3>{this.props.lane.title} </h3>
              <h5><span className="w3-badge">{this.props.lane.cards.length}</span></h5>
            </header>
          </div>
            {this.props.lane.cards.map(card =>
                <Card key={card.id} card={card} onDeleteCard={this.props.onDeleteCard}
                laneid={this.props.lane.id}/>)}

          <button className="w3-button w3-block w3-dark-grey" onClick={() =>
             this.props.onCreateCard(this.props.lane.id,
            {id:31, title:'asdasd', note:'nnooooo', labels:[]})}>+ Add a card</button>
        </div>
    );
  }

}
