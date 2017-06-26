import React from 'react';
import { formElementsStyle } from '../styles/styles';

export default class ImportExportJson extends React.Component {

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
      </div>
    );
  }
}
