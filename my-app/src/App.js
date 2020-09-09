import React, {Component} from 'react';
import logo from './logo.svg';
import Card from "./Card"
import Followers from "./Followers"
import axios from "axios"

import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//1.Create Class
//2. Add render method
//3. State and add what info is needed
//4. Adding Components
//5. ComponentDidMount
class App extends Component {
  state = {
    user: [],
    followers: []
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/karlamartinezmoctez')
    .then(response => {
      console.log('API "User" Response', response)
      this.setState({ user: response.data })
    })
    .catch(err => {
      console.log('API "User" Error', err)
    })

    axios.get('https://api.github.com/users/karlamartinezmoctez/followers')
    .then(response => {
      console.log('API "Followers" Response', response)
      this.setState({ followers: response.data })
    })
    .catch(err => {
      console.log('API "Followers" Error', err)
    })
  }

  render(){
    return(
      <div>
        <h1>Github User</h1>
        <Card userData={this.state.user} />
        <Followers followers={this.state.followers} />
      </div>
    )
  }
}


export default App;
