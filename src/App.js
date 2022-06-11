import React from 'react';

class App extends React.Component{
  constructor(){
    super(); // /calling parent constructor.

    // / state property is present in Component class there for we call super(), constructor of parent class to get access to state property. 

    this.state = {
      monsters: [],
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({monsters: data}));
  }

  render(){
    return(
      <div className = 'main'>
        {
          this.state.monsters.map((monster) => <h1 key = {monster.id}>{monster.name}</h1>)
        }
      </div>
    )
  }
}

export default App;
