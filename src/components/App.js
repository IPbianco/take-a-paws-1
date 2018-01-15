import React, { Component } from 'react';
import '../App.css';
import DogList from './DogList';
import Home from './Home';

function ConditionalHome(props) {
  const showDogs = props.showDogs
  const dogsApi = props.dogsapi

  if (showDogs !== "null") {
    return <DogList dogsapi={dogsApi}/>
  }
  else {
      return <Home />;
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dogsapi: [],
      isLoggedIn: sessionStorage.getItem('id')
    }
  }

  componentDidMount() {
    let self=this;

    fetch("http://localhost:3001/api/dogs")
      .then(function(results) {
        return results.json();
      })
      .then(function(data){
          self.setState({
            dogsapi: data
          })
      })
      .catch(function(error) {
        console.log(error)
      });
  }

  render() {
    return (
      <ConditionalHome showDogs={this.state.isLoggedIn} dogsapi={this.state.dogsapi} />
    );
  }
}

export default App;
