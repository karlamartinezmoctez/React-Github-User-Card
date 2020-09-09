import React, {Component} from 'react';
import logo from './logo.svg';
import Card from "./Card"
import Followers from "./Followers"

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
class App extends Component {
  state = {
    user: [],
    followers: []
  }

  render(){
    return(
      <div>
        <h1>Hello</h1>
        <Card userData={this.state.user} />
        <Followers followers={this.state.followers} />
      </div>
    )
  }
}


export default App;
