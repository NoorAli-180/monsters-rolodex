import React from 'react';

import './App.css';
import { CardList } from './components/card-list/CardList.jsx';
import { SearchBox } from './components/search-box/SearchBox.jsx';

class App extends React.Component{
  constructor(){
    super();
    // /calling parent constructor.

    // / state property is present in Component class there for we call super(), constructor of parent class to get access to state property.
    this.state = {
      monsters: [],
      searched: '',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({monsters: users})});
  }

  render(){
    const {monsters, searched} = this.state;
    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searched.toLowerCase()));

    return(
      <div className="App">
        <SearchBox onChange = {(e) => this.setState({searched: e.target.value})}/>
        <CardList monsters = {filteredMonsters} />
      </div>
    )
  }
}

export default App;
