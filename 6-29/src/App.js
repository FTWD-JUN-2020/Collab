import React, { Component } from 'react';
import Juan from './Juan'
import Stefan from './Stefan'
import axios from 'axios'



class App extends Component {

  componentDidMount(){ //onPageLoad 
      console.log('component mounted!!!!!')

      axios.get(`https://dog.ceo/api/breeds/image/random`)
        .then(res => console.log(res))
  }


  render() {
    return (
      <div className="container">
          any questions?
         No longer refreshing

         <Stefan/>
        <Juan />


      </div>
    );
  }
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       Welcome to React!!!! {20000 + 200000}

//       <nav className="navbar">hello</nav>

//     </div>
//   );
// }