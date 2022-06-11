import React from 'react';

import './App.css';
import { CardList } from './components/card-list/CardList.jsx';

class App extends React.Component{
  constructor(){
    super();
    // /calling parent constructor.

    // / state property is present in Component class there for we call super(), constructor of parent class to get access to state property.
    this.state = {
      monsters: [],
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({monsters: users})});
  }

  render(){
    return(
      <div className="App">
        <CardList monsters = {this.state.monsters} />
      </div>
    )
  }
}

export default App;
