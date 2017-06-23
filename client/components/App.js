import React from 'react';
import NavigationBar from '../pages/NavigationBar';
import Content from '../pages/Content';

class App extends React.Component {
  render(){
    return(
        <div className="w3-container">
          <NavigationBar />
          <Content />
        </div>
    );
  }
}

export default App;
