import React, { Component } from 'react';
import Login from './Components/Login/Login';
import Congrats from './Components/Congratulations/Congrats';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Route keeps track on where we are on a page
      route: 'login',
      isSignIn: 'false',
      email: '',
      password: ''
    }
  }




  onRouteChange = (route, email, password) => {
    if (route === 'login' && email === 'unofficial@gmail.com' && password === '123456789') {
    this.setState({isSignIn: true})
  } else if (route === 'congrats') {
    this.setState({isSignIn: false})
  }
    this.setState({ route: route })
  }
  render() {
    return (
      <div>
        {this.state.route === 'login'
          ? <Login onRouteChange={this.onRouteChange}/>
          : <Congrats onRouteChange={this.onRouteChange}/>
        }

      </div>
    );
  }
}

export default App;
