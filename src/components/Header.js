import React, {Component} from 'react';

class Header extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //
  //   }
  // }

  render() {
    return (
      <div className="header">
        <div>BaseCamp logo</div>
        <div>{this.props.user.course.name}</div>
        <div>{this.props.user.name}</div>
      </div>
    )
  }

}

export default Header;
