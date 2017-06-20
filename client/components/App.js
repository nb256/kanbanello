import React from 'react';
import NavigationBar from './NavigationBar';
import Content from './Content';

class App extends React.Component {
  render(){
    return(
      <div className="container">
        <NavigationBar />
        <Content />
      </div>
    );
  }
}

export default App;
