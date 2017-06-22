import React from 'react';
import Lane from '../components/Lane';
let id= 1000;


export default class Home extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      lanes: [
        {
          id: 1,
          title: 'Lane One',
          cards: [
            {
              id: 1,
              title: 'Card One',
              note: 'Learn React'
            },
            {
              id: 2,
              title: 'Card Two',
              note: 'Do laundry'
            }
          ]
        }
      ]


    };

    this.deleteLane = this.deleteLane.bind(this);
    this.addLane = this.addLane.bind(this);
  }
  render() {

    return (
      <div>
        <button className="w3-button w3-black" onClick={this.addLane}>+ New Lane</button>
        <button className="w3-button w3-black" onClick="" >+ New Card</button>
        <div className="w3-row">
          {this.state.lanes.map(lane =>
            <Lane key={lane.id} lane={lane} onDelete={this.deleteLane} />
          )}
        </div>
      </div>
    );
  }

  addLane() {
    id++;
    this.setState({
      lanes: this.state.lanes.concat([{
          id: id,
          title: 'Lane'+id,
          cards: [
            {
              id: 1,
              title: 'new card',
              note: 'Learn Rasdfeact'
            }
          ]
      }])
    });
  }

  deleteLane (id) {
    this.setState({
      lanes: this.state.lanes.filter(lane => lane.id !== id)
    });
  }

}
