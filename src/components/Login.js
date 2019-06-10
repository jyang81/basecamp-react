import React, {Component} from 'react';

class Login extends Component {
  // constructor() {
  //   super()
  //
  // }

  render() {
    return (
      <div>
      <form>
        <div>
        <label htmlFor="email">Email</label><br />
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div>
        <label htmlFor="password">Password</label><br />
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
    )
  }


}

export default Login;
