import React, {Component} from 'react';
import { Image } from 'semantic-ui-react'

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

  schoolLogo = (school) => {
    switch (this.props.user.school) {
      case 'Flatiron School':
        return './images/fis.png'
      case 'Code Fellows':
        return './images/cf.png'
      case 'General Assembly':
        return './images/ga.png'
      case 'Galvanize':
        return './images/gv.jpg'
      default:
        return './images/fis.png'
    }
  }

  render() {
    return (
      <div className="div6">
        <div>BaseCamp logo</div>
        <div><Image src={this.schoolLogo(this.props.user.school)} avatar /> {this.props.user.school}: {this.props.user.course.name}</div>
        <div><i className="user circle icon"></i> {this.props.user.name}</div>
      </div>
    )
  }

}

export default Header;
