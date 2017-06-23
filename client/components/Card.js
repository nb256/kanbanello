import React from 'react';
import Label from './Label';
import EditCardModal from '../components/EditCardModal';

const deleteButtonStyle =  {
    position:"absolute",
    right:"10px",
    top:"8px"
};
const editButtonStyle={
  position:"absolute",
  right:"30px",
  top:"8px"
};


export default class Card extends React.Component {

  render() {
    return (
      <div>
        <EditCardModal  card={this.props.card} modalId={'m'+this.props.card.id}
        onEditCard={this.props.onEditCard} laneid={this.props.laneid}/>
        <div className="w3-card-4">
          <div className="w3-tooltip">
          <span style={editButtonStyle} className="w3-text">
            <i className="fa fa-pencil-square-o"
             onClick={() =>
               document.getElementById('m'+this.props.card.id).style.display='block'} />
          </span>
            <span style={deleteButtonStyle} className="w3-text">
              <i className="fa fa-window-close" onClick={() =>
                 this.props.onDeleteCard(this.props.laneid,this.props.card.id)}>
              </i>
            </span>
            <div className="w3-container">
              <h4>{this.props.card.title}</h4>
              <hr/>
              <p>{this.props.card.note}</p>
              <hr/>
              <p>
              {this.props.card.labels.map(label =>
                  <Label key={label.id} label={label} onDeleteLabel={this.deleteLabel}/>)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // addLabel() {
  //   id++;
  //   this.setState({
  //     labels: this.state.labels.concat([{
  //         id: id,
  //         text: 'newlab',
  //         color: 'blue'
  //     }])
  //   });
  // }
  //
  // deleteLabel (id) {
  //   this.setState({
  //     labels: this.state.labels.filter(label => label.id !== id)
  //   });
  // }

}
