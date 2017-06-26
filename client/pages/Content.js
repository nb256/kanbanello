import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ImportExportJson from './ImportExportJson';

export default class Content extends React.Component {
  render() {
    return (
      <div className="w3-panel">
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/iojson' component={ImportExportJson}/>
          </Switch>
        </main>
      </div>
    );
  }
}
