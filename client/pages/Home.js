import React from 'react';
import Lane from '../components/Lane';
import {connect} from 'react-redux';
import AddCardModal from '../components/addCardModal';
import actions from '../actions';

const clearButtonStyle={
  float:"right"
}

let addCardModalId = new Date().getUTCMilliseconds();
class Home extends React.Component {

  constructor(props) {
    super(props);

    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e){
    const file = this.fileUpload.files[0];

    var readed = file,read = new FileReader();

      read.readAsBinaryString(readed);

      read.onloadend = function(){
              try{
                localStorage.setItem('state', read.result);
                location.reload();
              }catch (err)
              {
                console.log('localStorage failed for some reason:'+ err);
              }
          }

  }
  ClearLocalStorage (){
    localStorage.clear();
     location.reload();
  }

  render() {


    return (
      <div>
        <AddCardModal  allLanes={this.props.allLanes} modalId={addCardModalId}
        onCreateCard={this.props.onCreateCard}/>

        <button className="w3-button w3-black" onClick={() =>
          this.props.onCreateLane()}>+ New Lane</button>
        <button  className="w3-button w3-black"  onClick={() =>
          document.getElementById(addCardModalId).style.display='block'} >
          + New Card</button>

        <div className="w3-row" >
        {this.props.allLanes.map(lane =>
          <Lane key={lane.id} lane={lane} onDeleteLane={this.props.onDeleteLane}
          onCreateCard={this.props.onCreateCard} onDeleteCard={this.props.onDeleteCard}
          onEditLane={this.props.onEditLane} onEditCard={this.props.onEditCard}
          onCreateLabel={this.props.onCreateLabel}/>
        )}

        </div>
        <div className="w3-border-top w3-border-bottom w3-border-green">
          <label>Import a JSON file: </label>
          <input id="input_open" className="input_file" type="file"
          accept='.json' ref={(ref) => this.fileUpload = ref}
            onChange={this.handleFile}/>
          <button style={clearButtonStyle} className="w3-button w3-red"
          onClick={this.ClearLocalStorage}> Clear LocalStorage</button>
        </div>
      </div>
    );
  }

}

export default connect(actions.mapStateToProps,actions.mapDispatchToProps)(Home);
