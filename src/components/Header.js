import React, {Component} from 'react';

class Header extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //
  //   }
  // }

  logOut() {
    localStorage.removeItem('jwt')
  }

  render() {
    return (
      <div className="header-bar">
        <div>BaseCamp logo</div>
        <div>{this.props.user.course.name}</div>
        <div><i className="user circle icon"></i> {this.props.user.name}</div>
      </div>
    )
  }

}

export default Header;
