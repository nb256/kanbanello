import React from 'react';
import Lane from '../components/Lane';
let id= 1000;


export default class Home extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      lanes: [
        {
          id: 800,
          title: 'Lane One',
          cards: [
            {
              id: 1800,
              title: 'Card One',
              note: 'Learn React',
              labels: [
                {
                  id: 2800,
                  text: 'exLabel',
                  color: 'blue'
                }
              ]
            },
            {
              id: 1801,
              title: 'Card Two',
              note: 'Do laundry',
              labels: [
                {
                  id: 2801,
                  text: 'exLabel2',
                  color: 'red'
                }
              ]
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
          {console.log(this.state.lanes)}
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
              note: 'Learn Rasdfeact',
              labels: [
                {
                  id: 1,
                  text: 'exLabel3',
                  color: 'green'
                }
              ]
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
