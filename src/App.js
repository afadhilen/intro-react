import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Intro from './components/intro.js';


//Function Component -> Properties
function Greeting(){
  return <h1>Hello Nama</h1>
}

function Greeting_w_Name(props){
  return <h1>Hello {props.name}</h1>
}

//Class Component

class Detik extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: props.start
    }
  }


  //Lifecycle
  componentDidMount(){
    this.addInterval = setInterval(() => this.increase(), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.addInterval)
  }

  increase(){
    //update time tiap detik
    this.setState((state, props) => ({
      time: parseInt(state.time) - 1
    }))
  }

  render(){
    return(
      <div>{this.state.time}s</div>
    )
  }
}


// Function Handle Event
function Clicker(){
  function handleClick(e){
    alert('Clicked!')
    e.preventDefault()
  }

  return(
    <a href="#" onClick={handleClick}>Click Here</a>
  )

}

// Class Handle Event onClick
class Toggle extends Component{
  constructor(props){
    super(props)
    this.state = {
      toggleStatus: true
    }
    //deklarasi/bind penggunaan this untuk metode event
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(state => ({
      toggleStatus: !state.toggleStatus
    }))
  }

  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.toggleStatus ? 'ON' : 'OFF'}
        <p>Siapa yang kentut? {this.state.toggleStatus ? 'Aku' : 'Kamu'} </p>
      </button>
    )
  }

}

class App extends Component{
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting/> */}

        <Greeting_w_Name name="User 1"/>

        <Detik start="100"/>

        <Clicker/>

        <Toggle/>

        <Intro/>

      </header>
    </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
  
//       </header>
//     </div>
//   );
// }

export default App;
