import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Welcome from './components/Welcome';


class App extends Component {

  state = {
      loggedIn: false,
      user: {}
    }

  setUser = (data) => {
    this.setState({
      user: data.user,
      loggedIn: true
    }, () => {console.log('3. set user', this.state)}
    )}

  updateUserInfo = (data) => {
    this.setState({
      user: data,
      loggedIn: true
    }, () => {console.log('updated user', this.state)}
    )}

  logOut = () => {
    localStorage.removeItem('jwt')
    this.setState({
      loggedIn: false,
      user: {}
    })
  }

  render() {
    if (this.state.loggedIn === true && Object.keys(this.state.user).length !== 0) {
      return <Dashboard user={this.state.user} logOut={this.logOut} updateUserInfo={this.updateUserInfo} />
    }
    return (
      <div className="App">
        <div className="welcome">
          <div><Link to="/"><img src='./images/bc-logo-horz.svg' alt='BaseCamp logo'/></Link></div>
        </div>
        <Router>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" render={() => <Login setUser={this.setUser} />} />
          {console.log("4. inside router:", this.state)}
          <Route exact path="/signup" render={() => <Signup
              setUser={this.setUser}
              email={this.email}
              password={this.password}
              /> } />
        </Router>
      </div>
    )
  }
}

export default App;



// ============= OLD CODE =================


  // <Route exact path="/dashboard" render={() => Object.keys(this.state.user).length !== 0 ? <Dashboard user={this.state.user} /> : null} />
