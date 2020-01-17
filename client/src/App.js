import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import PlayerCard from "./components/PlayerCard"

class App extends Component{
  constructor(){
    super()
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      //console.log(res.data)
      this.setState({ players: res.data})
    })
    .catch(err => {
      console.error(err);
    })
  }
  
  render() {
    return (
      <div className="App">
        <PlayerCard players={this.state.players}/>
      </div>
    );
  }
}
export default App;
