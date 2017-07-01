import React from 'react';
import Card from './Card';
import EditLaneModal from '../components/EditLaneModal';
import { editButtonStyle, deleteButtonStyle, laneStyle } from '../styles/styles';

export default class Lane extends React.Component {

  onDrop(e) {
    this.props.onMoveCard(e.dataTransfer.getData('laneid'),
    this.props.lane.id, JSON.parse(e.dataTransfer.getData('card')));
  }

  onDragOver(e) {
    e.preventDefault();
  }

  render() {
    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);
    return (
        <div>
          <EditLaneModal lane={this.props.lane} modalId={'m' + this.props.lane.id}
          onEditLane={this.props.onEditLane}/>
          <div className="w3-col m2 w3-center" style={laneStyle} onDragOver={this.onDragOver}
          onDrop={this.onDrop}>
            <div className="w3-tooltip">
              <span style={editButtonStyle} className="w3-text">
                <i className="fa fa-pencil-square-o"
                 title="Edit Lane" onClick={() =>
                   document.getElementById('m' + this.props.lane.id).style.display = 'block'} />
              </span>
              <span style={deleteButtonStyle} className="w3-text">
                <i className="fa fa-window-close" title="Delete Lane" onClick={() =>
                   confirm('Are you sure for deleting the lane "' +
                   this.props.lane.title + '"?') ? this.props.onDeleteLane(this.props.lane.id) : null}/>
              </span>

              <header className="w3-container w3-light-grey"
              onClick={() =>
                document.getElementById('m' + this.props.lane.id).style.display = 'block'}>
                <br />
                <h3>{this.props.lane.title} </h3>
                <h5><span className="w3-badge">{this.props.lane.cards.length}</span></h5>
              </header>
            </div>
              {this.props.lane.cards.map(card =>
                  <Card key={card.id} card={card} onDeleteCard={this.props.onDeleteCard}
                  laneid={this.props.lane.id} onEditCard={this.props.onEditCard}
                  onCreateLabel= {this.props.onCreateLabel}
                  onDeleteLabel={this.props.onDeleteLabel}/>)}

            <button className="w3-button w3-block w3-dark-grey" onClick={() =>
               this.props.onCreateCard(this.props.lane.id,
              { title: 'New Card', labels: [] }) }>+ Add a card</button>
          </div>
        </div>
    );
  }
}
