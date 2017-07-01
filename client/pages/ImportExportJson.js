import React from 'react';
import { formElementsStyle } from '../styles/styles';
import { connect } from 'react-redux';
import actions from '../actions';

class ImportExportJson extends React.Component {

  handleFile() {
    const file = this.fileUpload.files[0];
    const read = new FileReader();

    read.readAsBinaryString(file);

    read.onloadend = () => {
      try {
        if (JSON.parse(read.result)) {
          localStorage.setItem('state', read.result);
          location.reload();
          this.props.history.push('/');
        }
      }
      catch (err) {
        console.log('Updating localStorage failed for some reason:' + err);
      }
    };
  }

  render() {
    this.handleFile = this.handleFile.bind(this);
    return (
      <div>
        <h1> Import a JSON file: </h1>
        <div className="w3-border-top w3-border-bottom w3-border-green">
          <label>Import a JSON file: </label>
          <input id="input_open" type="file"
          accept='.json' ref={(ref) => this.fileUpload = ref}
            onChange={this.handleFile} style = { formElementsStyle }/>
        </div>
        <h1> Get the local state as JSON: </h1>
        <div className="w3-border-top w3-border-bottom w3-border-red">
          <div className="w3-code jsHigh">
            {JSON.stringify(this.props.allLanes)}
          </div>
        </div>

      </div>
    );
  }
}

export default connect(actions.mapStateToProps, actions.mapDispatchToProps)(ImportExportJson);
