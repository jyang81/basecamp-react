import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const URL = 'http://localhost:5000/api/v1/'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
    this.email = React.createRef()
    this.password = React.createRef()
  }

  logIn = () => {

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
      if (data && data.jwt) {
        this.saveToken(data.jwt)
        this.getProfile()
      } else {
        const error = document.getElementById("error")
        error.textContent = data.message
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
      this.props.setUser(data)
    })
  }

  saveToken(jwt) {
    localStorage.setItem('jwt', jwt)
  }

  getToken(jwt) {
    return localStorage.getItem('jwt')
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.logIn()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
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
        <div id="error"></div>
        <div>
          New user? <Link to="/signup">Create an account</Link>
        </div>
      </div>
    )
  }


}

export default Login;
