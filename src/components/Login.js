import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button, Divider, Segment } from 'semantic-ui-react'


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

// FIX VERTICAL SPACING ISSUE ON FORM

  render() {
    return (
      <div className="form-container">
      <Segment placeholder>
          <form onSubmit={this.handleSubmit} className="ui form">
            <div className="field">
              <label>Email</label>
              <div className="ui left icon input">
                <input type="text"
                      name="email"
                      placeholder="Email"
                      ref={this.email}
                />
                <i aria-hidden="true" className="user icon"></i>
              </div>
            </div>
            <div className="field">
              <label>Password</label>
              <div className="ui left icon input">
                <input type="password"
                      name="password"
                      placeholder="Password"
                      ref={this.password}
                />
                <i aria-hidden="true" className="lock icon"></i>
              </div>
            </div>
             <button type="submit" className="ui primary button">Login</button>
          </form>
          <div id="error"></div>
          <Divider horizontal>Or</Divider>
            <br/>
            <Link to="/signup"><Button content='Sign up' icon='signup' size='big' /></Link>
            <br/>
      </Segment>
      </div>
    )
  }

}

export default Login;


// <div>
//   <form onSubmit={this.handleSubmit} >
//     <div>
//       <label htmlFor="email">Email</label><br />
//       <input
//         type="text"
//         name="email"
//         placeholder="Email"
//         ref={this.email}
//        />
//     </div>
//     <div>
//       <label htmlFor="password">Password</label><br />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         ref={this.password}
//        />
//     </div>
//       <input type="submit" value="Login" />
//   </form>
//   <div id="error"></div>
//   <div>
//     New user? <Link to="/signup">Create an account</Link>
//   </div>
// </div>
