import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { withRouter } from 'react-router';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';


class App extends Component {
  // constructor() {
  //   super()
    state = {
      user: {}
    }
  // }

  setUser = (data) => {
    this.setState({
      user: data.user
    }, () => {console.log('in set user', this.state.user)}
  )
  }

  render() {
    return (
      <div className="App">
        <div>BaseCamp</div>
        {/* if not logged in, redirect to log in page */}

        <Router>
          <Route exact path="/login" render={() => <Login setUser={this.setUser} />} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" render={() => Object.keys(this.state.user).length !== 0 ? <Dashboard user={this.state.user} /> : null} />
        </Router>
      </div>
    )
  }
}

export default App;
