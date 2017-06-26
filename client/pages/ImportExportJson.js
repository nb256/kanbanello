import React from 'react';
import { formElementsStyle } from '../styles/styles';
import { browserHistory } from 'react-router-dom';

export default class ImportExportJson extends React.Component {

  handleFile() {
    const file = this.fileUpload.files[0];
    const read = new FileReader();

    read.readAsBinaryString(file);
    read.onloadend = () => {
      try {
        localStorage.setItem('state', read.result);
        location.reload();
        this.props.history.push('/');
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
      {console.log(this.props)}

        <h1> Import a JSON file: </h1>
        <div className="w3-border-top w3-border-bottom w3-border-green">
          <label>Import a JSON file: </label>
          <input id="input_open" className="input_file" type="file"
          accept='.json' ref={(ref) => this.fileUpload = ref}
            onChange={this.handleFile} style = { formElementsStyle }/>
        </div>
      </div>
    );
  }
}
