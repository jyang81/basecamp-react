import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';

const URL = 'http://localhost:5000/api/v1/'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
    this.email = React.createRef()
    this.password = React.createRef()
  }

  logIn = (ev) => {
    ev.preventDefault()
    let email = this.email.current.value
    let password = this.password.current.value

    fetch(URL + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: {email, password} })
    })
    .then(res => res.json())
    .then(data => {
      console.log('data:', data)
      if (data && data.jwt) {
        this.setState({
          loggedIn: true
        })
        this.saveToken(data.jwt)
        this.getProfile()
      }
    })
  }

  getProfile = () => {
    let token = this.getToken()
    fetch(URL + 'profile', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log('profile data:', data)
      this.props.setUser(data)
    })
  }

  saveToken(jwt) {
    localStorage.setItem('jwt', jwt)
  }

  getToken(jwt) {
    return localStorage.getItem('jwt')
  }

  render() {
    if (this.state.loggedIn === true) {
      return <Redirect to='/dashboard' />
    }
    return (
      <div>
        <form onSubmit={this.logIn} >
          <div>
            <label htmlFor="email">Email</label><br />
            <input
              type="text"
              name="email"
              placeholder="Email"
              ref={this.email}
             />
          </div>
          <div>
            <label htmlFor="password">Password</label><br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              ref={this.password}
             />
          </div>
            <input type="submit" value="Login" />
        </form>
        <div>
          New user? <Link to="/signup">Create an account</Link>
        </div>
      </div>
    )
  }


}

export default Login;
