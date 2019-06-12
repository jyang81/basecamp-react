import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import { withRouter } from 'react-router';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';


class App extends Component {

  state = {
      loggedIn: false,
      user: {}
    }

  // static getDerivedStateFromProps(props, state) {
  //     console.log({props}, {state})
  //     return {user: props.user}
  //   }

  setUser = (data) => {
    this.setState({
      user: data.user,
      loggedIn: true
    }, () => {console.log('3. set user', this.state)}
    )}

  render() {
    if (this.state.loggedIn === true && Object.keys(this.state.user).length !== 0) {
      return <Dashboard user={this.state.user} />
    }
    return (
      <div className="App">
        <div>BaseCamp</div>
        <Router>
          <Route exact path="/login" render={() => <Login setUser={this.setUser} />} />
          <Route exact path="/signup" render={() => <Signup
              setUser={this.setUser}
              email={this.email}
              password={this.password}
              /> } />
            {console.log("4. inside router:", this.state)}
        </Router>
      </div>
    )
  }
}

export default App;



{/*// ============= LOG IN FUNCTIONS =================

  // logIn = () => {
  //
  //   let email = this.email.current.value
  //   let password = this.password.current.value
  //
  //   fetch(URL + 'login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({user: {email, password} })
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     if (data && data.jwt) {
  //       this.saveToken(data.jwt)
  //       this.getProfile()
  //     } else {
  //       const error = document.getElementById("error")
  //       error.textContent = data.message
  //     }
  //   })
  // }
  //
  // getProfile = () => {
  //   let token = this.getToken()
  //   fetch(URL + 'profile', {
  //     headers: {
  //       'Authorization': 'Bearer ' + token
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setUser(data)
  //   })
  // }
  //
  //
  // saveToken(jwt) {
  //   localStorage.setItem('jwt', jwt)
  // }
  //
  // getToken(jwt) {
  //   return localStorage.getItem('jwt')
  // }

  <Route exact path="/dashboard" render={() => Object.keys(this.state.user).length !== 0 ? <Dashboard user={this.state.user} /> : null} />
  // */}
