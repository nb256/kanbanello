import React from 'react';
import Label from './Label';
import EditCardModal from '../components/EditCardModal';
import { deleteButtonStyle, editButtonStyle } from '../styles/styles';

export default class Card extends React.Component {

  render() {
    return (
      <div>
        <EditCardModal card={this.props.card} modalId={'m' + this.props.card.id}
        onEditCard={this.props.onEditCard} laneid={this.props.laneid}
        onCreateLabel= {this.props.onCreateLabel} onDeleteLabel={this.props.onDeleteLabel}/>
        <div className="w3-card-4">
          <div className="w3-tooltip">
          <span style={editButtonStyle} className="w3-text">
            <i className="fa fa-pencil-square-o"
             title="Edit Card" onClick={() =>
               document.getElementById('m' + this.props.card.id).style.display = 'block'} />
          </span>
            <span style={deleteButtonStyle} className="w3-text">
              <i className="fa fa-window-close" title="Delete Card" onClick={() =>
                confirm('Are you sure for deleting the card "' +
                this.props.card.title + '"?') ?
                this.props.onDeleteCard(this.props.laneid, this.props.card.id)
                : null} />
            </span>
            <div className="w3-container" onClick={() =>
              document.getElementById('m' + this.props.card.id).style.display = 'block'}>
              <br/>
              <h4>{this.props.card.title}</h4>
              <hr/>
              <p>{this.props.card.note}</p>
              <hr/>
              {this.props.card.labels.map(label =>
                  <div key={label.id} className="w3-margin">
                    <Label key={label.id} label={label}/>
                  </div>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
